# Save as server/app.py
import json
from flask import Flask, jsonify, request
from flask_cors import CORS

# --- App Setup ---
app = Flask(__name__)
# Allow your React app (running on http://localhost:5173) to make requests
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# --- Helper Functions (to load your "AI") ---
def load_quiz_data():
    with open('data/quiz.json', 'r') as f:
        return json.load(f)

def load_lesson_data():
    with open('data/lessons.json', 'r') as f:
        return json.load(f)

# --- API Endpoints ---

@app.route('/api/quiz/start', methods=['GET'])
def start_quiz():
    quiz_data = load_quiz_data()
    start_question_id = quiz_data['startNode']
    start_question = quiz_data['questions'][start_question_id]
    return jsonify({
        "questionId": start_question_id,
        "questionText": start_question['text'],
        "options": start_question['options']
    })

@app.route('/api/quiz/answer', methods=['POST'])
def handle_answer():
    data = request.json
    question_id = data['questionId']
    answer_index = data['answerIndex']
    
    quiz_data = load_quiz_data()
    
    try:
        next_node = quiz_data['questions'][question_id]['next'][answer_index]
        
        if next_node.startswith('PROFILE_'):
            profile_name = next_node.replace('PROFILE_', '')
            return jsonify({
                "isComplete": True,
                "profile": profile_name
            })
        else:
            next_question_id = next_node
            next_question = quiz_data['questions'][next_question_id]
            return jsonify({
                "isComplete": False,
                "questionId": next_question_id,
                "questionText": next_question['text'],
                "options": next_question['options']
            })
    except (KeyError, IndexError):
        return jsonify({"error": "Invalid question or answer"}), 400

@app.route('/api/lesson/<profile_name>', methods=['GET'])
def get_lesson(profile_name):
    lessons = load_lesson_data()
    
    if profile_name in lessons:
        return jsonify(lessons[profile_name])
    else:
        # Fallback for a generic "advanced" profile
        if "ADVANCED" in lessons:
             return jsonify(lessons["ADVANCED"])
        return jsonify({"error": "Profile not found"}), 404

# --- Run the App ---
if __name__ == '__main__':
    app.run(debug=True, port=5000)
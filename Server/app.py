import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    print("❌ Error: API Key nahi mili! .env file check karein.")
else:
    genai.configure(api_key=api_key)
    print("✅ Gemini AI Connected Successfully!")

model = genai.GenerativeModel('gemini-1.5-flash')

# --- YEH NAYA HAI (Home Page Route) ---
@app.route('/')
def home():
    return "Server is running perfectly! 🚀 Ab React App se sawal puchiye."

# --- AI Route ---
@app.route('/ask', methods=['POST'])
def ask_ai():
    try:
        data = request.get_json()
        prompt = data.get('prompt')

        if not prompt:
            return jsonify({"answer": "Please ask a question."}), 400

        response = model.generate_content(prompt)
        return jsonify({"answer": response.text})

    except Exception as e:
        print(f"Server Error: {e}")
        return jsonify({"answer": "Sorry, server error."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
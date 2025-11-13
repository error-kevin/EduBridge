from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/ask", methods=["POST"])
def ask_ai():
    data = request.get_json()
    prompt = (data.get("prompt") or "").strip()

    if not prompt:
        return jsonify({"answer": "Please enter a valid question."}), 400

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",  # Free-tier friendly
            messages=[
                {"role": "system", "content": "You are an educational assistant who gives simple, clear explanations."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=200,
            temperature=0.6,
        )
        answer = response.choices[0].message.content.strip()
        return jsonify({"answer": answer})

    except Exception as e:
        print("Error:", e)
        return jsonify({"answer": f"⚠️ Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)

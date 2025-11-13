import os
import google.generativeai as genai
from flask import Flask, jsonify
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)

api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

# ✅ Use the new model path
model = genai.GenerativeModel("gemini-1.5-flash-latest")

@app.route("/test-ai")
def test_ai():
    try:
        response = model.generate_content("Hello Gemini! Can you respond?")
        return jsonify({"status": "✅ Working", "response": response.text})
    except Exception as e:
        print("❌ Error while testing Gemini:", e)
        return jsonify({"status": "❌ Failed", "error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, port=5000)

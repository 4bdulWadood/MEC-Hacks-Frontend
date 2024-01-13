from flask import Flask, request, jsonify
import pandas as pd
import openai

app = Flask(__name__)

# Load the dataset
df = pd.read_csv("dataset.csv", encoding='latin1', error_bad_lines=False)



# OpenAI API key
openai.api_key = "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"

def BasicGeneration(userPrompt):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role":"user","content":userPrompt}
        ]
    )
    return completion.choices[0].message.content

@app.route('/api/job', methods=['POST'])
def job_api():
    data = request.get_json()

    # Extract user input
    needs = data.get('accessibilityNeeds', '')
    user_prompt = f"Which category in the given list [Training and Sensitivity Programs, Accessible Websites and Intranet, Feedback Mechanisms, Clear Communication, Reasonable Accommodations, Accessible Facilities, Mentoring and Support Programs, Braille and Large Print Materials, Ergonomic Workstations, Assistive Technology, Flexible Work Arrangements, Accessible Communication, Accessible Emergency Evacuation Plans, Accessible Transportation, Mental Health Support, Assistance Animals, Accessible Rest Areas, Accessible Meetings and Events] does the {needs} refer to? Just give the name of the category, nothing else."

    # Use OpenAI API to generate response
    response = BasicGeneration(user_prompt)

    # Filter rows based on the "Experience Level" column using job_type (assuming your data is already loaded into df)
    job_type = data.get('jobType', '')  # Set to the desired job type
    if job_type in ["Part-time", "Full-time", "Contract"]:
        filtered_df = df[df["Type"] == job_type]
    else:
        filtered_df = df

    # Additional filtering based on location and experience level can be added here

    # Return the response
    return jsonify({'result': response})

if __name__ == '__main__':
    app.run(debug=True)

# notes-gpt2

## Description

A exploratory repository for GPT-2 synthetic clinical note generation

## Background

There is a need among clinical informatics and health IT professionals to develop and test systems and software that process "unstructured" healthcare data. One of the prevalent forms of unstructured data is a clinical note that summarizes a clinical care interaction. While there are many forms of clinical notes, some typical forms are a [progress note](https://en.wikipedia.org/wiki/Progress_note), consult note and [discharge summary](https://en.wikipedia.org/wiki/Inpatient_care#Progress). 

Many of these notes are currently documented in a [SOAP](https://en.wikipedia.org/wiki/SOAP_note) format, which includes subjective, objective, assessment and plan components. Clinical notes are hard to deidentify and any incompleteness in deidentificaiton leaves the performer subject to potentially large [HIPAA](https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act) fines due to the exposure of protected health information(PHI).  

Recent progress in artificial text generation provides an opportunity to create clinical notes without the risk of PHI exposure. This repository uses an open-source set of tools known as [GPT-2](https://github.com/openai/gpt-2) for text generation, developed by the [OpenAI](https://openai.com/).

This repository has 600+ text samples generated from GPT-2 (1558M model) using the prompts as shown. 

## Methods

A variety of prompts were used for the GPT-2 model. No model training was performed for this task and all default settings from GPT-2 were used. Before generating the current batch of samples, the Diameter Health team did explore a variety of potential prompts. It was found the prompts that included certain words typical of clinical notes (e.g. "History of Present Illness", "Assessment and Plan" and "patient") were more likely to elicit clinical note like responses. 

Two types of prompts were created. The first is the "history of illness" which is often recorded as part of the "subjective" part of clinical notes. The second is from the "assessment / plan" portion of clinical notes. Approximately 300 prompts of each were generated.  

Responses from GPT-2 vary in length. We truncated all responses in two ways. First GPT-2 responses may include a special word (<|endoftext|>) that designate when the previous tokens are no longer used. We only include responses up to an <|endoftext|> in this repo. Then to provide consistency of scoring samples, we truncated samples at the sentence ending after the 60th word. All line breaks and tabs were also removed to provide similar formatting. 

Two individuals with medical informatics and real-world clinical note review experience then scored the samples from 0-10 on how realistic they were in respect to the prompt provided and medical coherence. 5 notes were jointly reviewed to discuss scoring criteria, although all subsequent reviews were performed independently and blinded between reviewers.

## Results

Looks like there were some good notes! Take a peek in the repo and review for yourself. Here's one example of a highly scored note: 

**PROMPT**: 

Medical Decision Making: The patient is admitted for further evaluation and is found to have bilateral anterior compartment syndrome and right hip abduction dysfunction with bilateral patella dislocation with degenerative changes and calcified synovitis.

**RESPONSE (Sentence ending after 60th word)**:

The patient has no significant pulmonary disease with evidence of a sub-diaphragmatic hernia with an initial sacroiliac joint motion of 5 degrees of flexion and a peak motion of 23-27 degrees of abduction which demonstrates a clinically significant joint instability. Physical examination indicates a mildly active patient with increased muscle mass with a normal vital capacity. The clinical diagnosis of bilateral anterior compartment syndrome is made and a clinical diagnostic workup includes physical exam, lumbar puncture, computed tomography examination, iliac and femoral computed tomography, and ultrasound. 

Throughout the repo, the information is organized in the note folders following a similar structure (where XXX = sample number)

- AWS_Parsing_XXX.json
- Note_As_Scored_XXX.md
- Note_Before_Truncate_XXX.md  
- Settings_Scores_XXX.json

In addition, since there's a lot of notes, we've provided a README.md in the folder name links to allow people to navigate to higher scoring samples, which may be of most interest.  

## Want to learn more? 

This exploratory research was performed in the context of Diameter Health's synthetic patient generation module. We are taking notes like these and packaging them with structured data to create synthetic samples that are representative of the real-world. 

More information on Diameter Health is available here: [Diameter Health](https://www.diameterhealth.com)


# License (Modified MIT)

Diameter Health has no affiliation with OpenAI. Their original license model is shown below as these samples were generated using GPT-2. 

NLP of generated text was produced using [Amazon Medical Comprehend](https://aws.amazon.com/comprehend/medical/). Correspondence with Amazon Web Services staff (Christine Morgner) said publishing outputs of their NLP engine for these notes is permitted. None of the following license applies to Amazon Comprehend Medical, which is a proprietary and copyright product offered by Amazon Web Services, Inc.  

Modified MIT License from OpenAI

Software Copyright (c) 2019 OpenAI

We don’t claim ownership of the content you create with GPT-2, so it is yours to do with as you please.
We only ask that you use GPT-2 responsibly and clearly indicate your content was created using GPT-2.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice need not be included with content created by the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
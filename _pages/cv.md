---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D. in Electrical and Computer Engineering, Georgia Institute of Technology, 2024 (expected). Minor in Mathematics. Advisor: Prof. Saibal Mukhopadhyay. January 2020 - Present.
* M.S. in Electrical and Computer Engineering, Georgia Institute of Technology, 2024. 
* B.Tech. in Electronics and Telecommunication Engineering, First Class with Honors & Distinction, Jadavpur University, 2019. Advisor: Prof. Amit Konar.

Work Experience
======
* January 2020 - Present: Graduate Research Assistant, GREEN Lab, Georgia Institute of Technology, Atlanta, USA.
  * Focused on leveraging Spiking Neural Networks (SNNs) for advanced AI technologies. Key areas include event-driven temporal processing, parallel computational integration, and online learning on dynamic graphs.

* May 2023 - August 2023: Quantitative Research Intern - Equities, PanAgora Asset Management, Boston, USA.
  * Worked on building event-driven volatility trading strategies using large language models and reinforcement learning.

* July 2019 - December 2019: Research Assistant, NUS-Singtel Cyber-Security R&D Laboratory, Singapore.
  * Developed a risk-aware feature selection algorithm for IoT Device Classification.

* May 2018 - August 2018: Research Intern, INTERLAB Research Laboratory, University of Sherbrooke, Quebec, Canada.
  * Developed algorithms for stochastic simulations of nano-wire formation in nano-communication networks.

* December 2017 - June 2019: Research Assistant, Artificial Intelligence Lab, Jadavpur University, West Bengal, India.
  * Worked on deep learning and signal processing-based modeling for EEG and fMRI signals.

* May 2017 - July 2017: Research Intern, National Physical Laboratory, Indian Academy of Sciences, New Delhi, India.
  * Developed an algorithm for shooter localization using wireless sensor networks.

* May 2016 - December 2017: Undergraduate Research Assistant, Advanced Embedded and Digital Systems Laboratory, Jadavpur University, West Bengal, India.
  * Worked on future 5G Communication Networks and Network Security.

Skills
======
* Expertise in Spiking Neural Networks, Deep Learning, and Signal Processing.
* Proficient in Neural Architecture Search and energy-efficient computing.
* Skilled in developing algorithms for stochastic simulations and data analysis.
* Experience with machine learning models for trading strategies and IoT security.

Publications
======
  <ul>
    {% for post in site.publications reversed %}
    <li>{{ post.title }}. {{ post.authors }}. <em>{{ post.venue }}</em>, {{ post.year }}.</li>
    {% endfor %}
  </ul>
  
Talks
======
  <ul>
    {% for post in site.talks reversed %}
    <li>{{ post.title }}. <em>{{ post.event }}</em>, {{ post.year }}. {{ post.location }}</li>
    {% endfor %}
  </ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and Leadership
======
* Mentor for six Ph.D. students through the Georgia Tech ECE Graduate Student Organization (GSO) mentorship program.
* Senator, Georgia Tech Student Government Association, representing ECE graduate students.

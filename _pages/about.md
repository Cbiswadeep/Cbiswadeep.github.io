---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## Welcome!

I'm a fifth-year **Ph.D. Student** at the [Georgia Institute of Technology](https://www.gatech.edu/) in Atlanta, Georgia, specializing in **neuromorphic computing theory and algorithms**. My work is situated within the dynamic and innovative [Gigascale Reliable Energy-Efficient Nanosystem (GREEN) Lab](https://greenlab.ece.gatech.edu/), under the guidance of Prof. [Saibal Mukhopadhyay](https://greenlab.ece.gatech.edu/members/professor/).

## Latest News

Here, I'll share the most recent updates on my projects, publications, and any upcoming events or presentations. Check back often for the latest information!

- **April 3, 2024**: Happy to announce I received the **Outstanding ECE Graduate Research Assistant Award**
- **April 1, 2024**: Excited to announce I won the **Best Presentation Award** at Georgia Tech ECE Research Rally
- **March 27, 2024**: Happy to announce I won the **Colonel Oscar P. Cleaver Award** for my  PhD proposal dissertation at the 2024 Roger P. Webb Awards Program in the School of Electrical and Computer Engineering. Huge thanks to my advisor Prof. Saibal Mukhopadhyay and committee members Prof. Suman Datta and Prof. Justin Romberg
- **March 28, 2024**: Excited to announce we have two papers accepted in L4DC, 2024. Thanks to my collaborators Hemant Kumawat, Beomseok Kang and Harshit Kumar.
- **January 11, 2024**: Delighted to receive the **ECE STEER Fellowship, 2024**
- **January 16, 2024**: Excited to share my paper, "Sparse Spiking Neural Network: Exploiting Heterogeneity in Timescales for Pruning Recurrent SNN", is accepted in ICLR 2024 as a poster presentation.



## Research Vision

Real-world artificial intelligence (AI) faces a fundamental challenge: while AI systems excel in controlled environments, they struggle with the unpredictable dynamics of real-world settings. Current autonomous systems rely on periodic retraining and human intervention, which renders them brittle when facing environmental shifts—autonomous vehicles falter in unexpected weather, medical systems struggle with new disease variants, and robots fail in novel scenarios.

My research introduces a fundamentally new perspective: treating AI as a dynamical system that naturally evolves and adapts. This framework embeds adaptability and resilience within the model's core, enabling continuous, asynchronous learning and self-sustaining operation. By redefining AI through the lens of dynamical systems theory, we move beyond traditional static models toward systems that behave more like self-sustaining organisms, capable of evolving in response to environmental changes.

### Research Thrusts

#### 1. Learning Algorithms as Adaptive Control Systems

My research addresses real-time adaptability by embedding adaptive control directly within learning algorithms, especially through SNNs. Key achievements include:

- Development of Heterogeneous Recurrent SNNs (HRSNNs) with enhanced temporal memory retention
- Introduction of Lyapunov Noise Pruning (LNP), achieving neuron sparsity up to 57%
- Creation of RoboKoop, integrating Koopman operator theory for enhanced off-policy control

#### 2. Dynamic Model Architecture

My work promotes dynamic, evolving architectures that balance complexity and efficiency, demonstrated through:

- Development of DNN-SNN hybrid object detection models with 3x power reduction
- Creation of SPLR network achieving 70x reduction in FLOPs
- Implementation of architecture search with uncertainty regularization
- Development of STEMFold for multi-agent systems with hidden agents

#### 3. Model and Platform Co-Design

Focusing on creating computationally efficient, adaptive systems through:

- Development of the MONETA Processing-in-Memory platform
- Contribution to SATori, a k-SAT accelerator using Stochastic Recurrent Neural Networks
- Collaboration on Oscillator Ising Machines for energy-efficient optimization

### Future Research Directions

My research focuses on two critical areas that push the boundaries of adaptive AI:

#### Self-Healing AI for Autonomous Space Exploration

Developing adaptive neuromorphic models capable of autonomously adjusting to changing conditions and recovering from hardware faults in extreme space environments, where human intervention is impractical.

#### Resilient AI for Real-Time Disaster Response

Creating adaptive, resilient AI systems that can autonomously reorganize in real-time for disaster response operations, capable of maintaining stability despite component failures and rapidly changing conditions.




---

Feel free to navigate through the website to learn more about my projects, publications, and academic pursuits. Your insights and inquiries are always welcome!


<!-- This is the front page of a website that is powered by the [academicpages template](https://github.com/academicpages/academicpages.github.io) and hosted on GitHub pages. [GitHub pages](https://pages.github.com) is a free service in which websites are built and hosted from code and data stored in a GitHub repository, automatically updating when a new commit is made to the respository. This template was forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) created by Michael Rose, and then extended to support the kinds of content that academics have: publications, talks, teaching, a portfolio, blog posts, and a dynamically-generated CV. You can fork [this repository](https://github.com/academicpages/academicpages.github.io) right now, modify the configuration and markdown files, add your own PDFs and other content, and have your own site for free, with no ads! An older version of this template powers my own personal website at [stuartgeiger.com](http://stuartgeiger.com), which uses [this Github repository](https://github.com/staeiou/staeiou.github.io).

A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->

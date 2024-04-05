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



### Research Interests

My academic journey is driven by a critical examination of the limitations inherent in traditional deep neural networks (DNNs), such as significant energy demands, lack of adaptability, and poor temporal processing capabilities. In pursuit of more efficient, flexible, and temporally aware computational models, my work focuses on the exploration and advancement of **spiking neural networks (SNNs)**.

#### Theoretical Foundations

My theoretical investigations are anchored in four key areas:

- **Temporal Processing:** Delving into the superior capabilities of SNNs in leveraging temporal information, offering new possibilities for processing sequences and time-dependent data.
- **Event-based Processing:** Exploring the unique efficiency and precision of SNNs in managing event-based data, essential for real-time and energy-efficient computations.
- **Plasticity:** Enhancing neural networks' adaptability to dynamic environments and their resilience against noise and adversarial attacks, thereby creating systems that can adjust to new information while maintaining their integrity.
- **Uncertainty:** Developing methodologies to quantify and calibrate the uncertainty in SNN predictions, especially given their distinct temporal dynamics, aiming to bolster the reliability of SNN-based decision systems.

#### Practical Applications

Complementing my theoretical research, I am actively involved in applying these insights to revolutionize various fields:

- **Large Scale Graph Optimization:** Employing SNNs for complex optimization within large graphs, facilitating more efficient solutions in network analysis, logistics, and more.
- **Ultra-fast Monte Carlo Simulations:** Leveraging the speed and efficiency of SNNs to enhance Monte Carlo simulations and simulations of random walks, dramatically speeding up computational tasks across finance, physics, and engineering disciplines.
- **Spike-based Event-driven Optimal Control:** Innovating control systems powered by the dynamic and precise responses of SNNs to real-time events, setting new standards for speed and accuracy.

Through a balanced emphasis on theoretical exploration and practical application, my research endeavors to expand the horizons of neuromorphic computing and establish its foundations for addressing some of the most pressing challenges of our times.




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

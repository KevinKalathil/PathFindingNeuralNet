<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Path Finding Neural Network</h3>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#instructions">Instructions</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]
`Shows The Network Training`

The goal of this project was to develop a stronger understanding of how neural networks 'train' and demystify the backpropagation algorithm that helps the neural network improve. The neural network is built using a simple three-layer MLP network with 4 inputs (distance from the agent's corners to the pathway) and a single output which represents speed of the agent on the y-axis

After each 'failure', the backpropagation algorithm is executed and the weights are updated. The following link was followed closely to write the backpropagation algorithm : https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/ along with the instructional videos provided by Andrew Ng's Machine Learning course on Coursera. I first used the MSE loss function for the purpose of simplicity but switched to a cross-entropy loss function after a few trials of experimentation. I realized that the weights were not updating due the vanishing gradients problem and so I followed the suggestions of Michael Nielson in his Deep Learning book (http://neuralnetworksanddeeplearning.com/chap3.html). The cross-entropy solved the initial issue as it's first derivative scales up as the error increases and the speed of training increased considerably.

### Built With

- HTML
- Javascript

## Instructions

To get a local copy up and running follow these simple example steps.

1. Clone the Repo and open the index.html file to view the project

## Next Steps

I originally intend for the path to have multiple turns instead of just the single one that is currently shown. However, the current testing environment causes it to struggle with multiple turns. I don't see this as a completely unexpected issue, but rather a fault in the experiment's design. The mid point of the path is an ambiguous point between whether or not to tell the network it should have went up/down and although it fails, it generally gets to a point where it at least goes near the midpoint. Will work on resolving this issue as a next step of this project, either by redesigning the experiment, or making some modification to the network itself.

![Product Name Screen Shot][failure-screenshot]

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## Contact

Kevin Kalathil - kkalathi@uwaterloo.ca

Project Link: [https://github.com/KevinKalathil/ChessFlashCards](https://github.com/KevinKalathil/ChessFlashCards)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: animation.gif
[failure-screenshot]: Animation2.gif
[ambiguous-case]: images/FindingCandidate.png

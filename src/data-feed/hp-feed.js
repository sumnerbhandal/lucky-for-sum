import { Ligamend, Portfolio, EnrichedSearch, Heuristic } from "../home/components/svg-illustrations";
import React from 'react';

const homePageProjects = [
  {
      "title": "A Designer Portfolio For All",
      "summary": "UX/UI Design, Accessibility, Front-End Development",
      "url": "portfolio-for-all",
      "id": "0",
      "image": <Portfolio />,
      "feature": "Portfolio-Feature",
      "intro": [
          "The consequence of being a designer is that you're only ever as good as your latest portfolio.",
          "Documenting the journey to creating an inclusive design experience."
      ]
  },
  {
      "title": "Ligamend - ACL Injury Support Community",
      "summary": "Branding, Illustration, UI Design",
      "url": "ligamend",
      "id": "1",
      "image": <Ligamend />,
      "feature": "Ligamend-Feature",
      "intro": [
          "Building a support community set up to aid the rehabilitation of people who have suffered an anterior cruciate ligament (ACL) injury."
      ]
  },
  {
      "title": "Enriched Site Search",
      "summary": "UX/UI Design, Prototyping, Front-End Support",
      "url": "enriched-autocomplete",
      "id": "2",
      "image": <EnrichedSearch />,
      "feature": "Autocomplete-Feature",
      "intro": [
          "As stock diversifies, taxonomies grow and it gets just that much more difficult to find anything.",
          "Giving the consumers an alternative means of finding products helps alleviate the pressure of mislabelling menus or categories."
      ]
  },
  {
        "title": "Website Redesign Using Heuristics",
        "summary": "Heuristic Evaluation, Web Design, Marketing Support",
        "url": "web-redesign-heuristics",
        "id": "3",
        "image": <Heuristic />,
        "feature": "web-redesign-heuristics",
        "intro": [
            "Improving user experience, raising product awareness, and increasing website incoming leads."
        ]
    }
]

export default homePageProjects;
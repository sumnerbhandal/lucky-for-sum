import { Ligamend, Portfolio, EnrichedSearch, Heuristic } from "../home/components/svg-illustrations";
import React from 'react';

export const homePageProjects = [
    {
      "title": "A Portfolio For All",
      "SEOTitle": "How To Make An Accessible UI Experience Fun",
      "SEODescription": "Deconstruction of a UX/UI portfolio designed and built with accessibility considerations in mind, tailored using some of your browsers preferences.",
      "keywords": "Portfolio, UX Design, Accessibility, A11Y, Front-End Development, app, optimisation, responsive design, native mobile apps, API Endpoints, Interactions, user preferences, dark mode",
      "path": "portfolio/",
      "headerImage":  <Portfolio />,
      "headerAlt": "Portfolio for all header image", 
      "intro": [
          "The consequence of being a designer is that you're only ever as good as your latest portfolio."
      ],
      "url": "portfolio-for-all",
      "id": "0",
      "background" : [
          {
            "h2": "Background",
            "subsection": [
                {
                    "copy": [
                        "I make it an annual challenge to design and build a new personal website. The issue with this is that I'm often more critical of my own work than I am of others, so I don't always appreciate the level of consideration that goes into a project.",
                    ]
                },
                {
                    "h3": "Tell, don't show",
                    "copy": [
                        "If you've enjoyed interacting with this site, then the odds are that you've probably experienced it a way that is tailored  to your browsing preferences without even knowing."
                    ]
                }
            ],
            "responsibilities": [
                {
                    "h3": "Responsibilities",
                    "skills": [
                        "UX/UI Design",
                        "Accessibility",
                        "Front-End Development"
                    ]
                }
            ],
            "featuredImage": {
                "image": "placeholder.png",
                "alt": "Placeholder"
            }
        }
      ],
      "article" : [
        {
            "h2": "Statement of Intent",
            "subsection": [
                {
                    "copy": [
                        "To create an inclusive experience that showcases some of the skills I have to offer, while showing that accessible design can still be fun."
                    ]
                }
            ]
        },
        {
            "h2": "The Design Process",
            "subsection": [
                {
                    "h3": "The foundation",
                    "copy": [
                        "The benefit of developing your own site means that you can start with a vision and take it from there.",
                        "I had a pretty good idea of the UI experience I wanted, it wanted to feel as much like a native app as possible, but be a web app. It would consist of a maximum of 3 main pages, the hompage, the project page and if I'm feeling adventurous, a contact page."
                    ],
                    "subsectionImage" : {
                        "image": "placeholder-shallow.png",
                        "alt": "Placeholder"
                    }
                },
                {
                    "h3": "Accessibility as a requirement",
                    "copy": [
                        "Through good intentions, or through threat of being penalised, companies are now starting to get more on board with being more accessible. I have taken it on as part of my role at Next to bake usability and accessibility into the future UI framework for the company.",
                        "The truth is that a lot of the implementation falls within the front-end developers realm of execution, but as designers, we have a role to play too.",
                        "We can start by making sure that text elements have sufficient colour contrasts and font sizes. You'll quickly realise that in making this small conscious decisions, you'll also start to make your UI that much more usable."
                    ],
                    "subsectionImage" : {
                        "image": "placeholder.png",
                        "alt": "Placeholder"
                    }
                },
                {
                    "h3": "Speed, glorious speed",
                    "copy": [
                        "Two of my favourite things about native mobile apps are the perception of speed, 'everything's faster on the app' and the intricate animations, 'it feels appy'.",
                        "Part of recapturing that magic is through optimisation, that's where the speed comes in and improving the feedback the user receives when interacting with the site. When they go to click on something, what do they expect will happen?"
                    ],
                    "subsectionImage" : {
                        "image": "placeholder-shallow.png",
                        "alt": "Placeholder"
                    }
                },
            ] 
        },
        {
            "h2": "Designing in the Browser",
            "subsection": [
                {
                    "h3": "Responsive design",
                    "copy": [
                        "One of the most important things with designing for the web is understanding that users have so many ways of consuming web content now, and it's your responsibility to try and tailor the experience so that it's usable for them all at the very least.",
                        "Once I have an idea of how the content will reflow, I look to build in a grid system at a higher level that means that the canvas I now have to work in will always adhere to these constraints"
                    ],
                    "subsectionImage" : {
                        "image": "placeholder.png",
                        "alt": "Placeholder"
                    }
                },
                {
                    "h3": "Lightweight and resusable",
                    "copy": [
                        "Having done my servitude building websites through hard coding html pages and using PHP reusable components, I am now living firmly in the world of React JS.",
                        "One of the blessings of adapting my world into a javascript based world is moving to mapping data from API endpoints, being that static or dynamic so that you can look to reduce the amount of code you write and the weight of your site.",
                        "However, my favourite part of using these is that it works almost like magic. In fact, I'm writing the contents of this article straight into the API as though it is a markdown file and it is automatically updating the site. Great for those pesky spelling mistakes."
                    ],
                    "subsectionImage" : {
                        "image": "placeholder.png",
                        "alt": "Placeholder"
                    }
                },
                {
                    "h3": "Making it keyboard navigatable",
                    "copy": [
                        "When it comes to users who have difficuly navigating through websites using the more traditional methods such as a mouse or cursor, there is the option of falling back to using a keyboard or screen reader.",
                        "In order for this work, it takes a few key considerations. One of the fundamentals is correctly written and structured HTML, there is a reason why there are so many HTML Tags, it's because each one serves a particular purpose and that helps to give utilities such as screen readers the ability to communicate back to the user, what the element is and its intended use.",
                        "Another favourite of mine is focus states. Too often I have seen websites actively removing the browsers focus states as they are deemed to interfere with the aesthetics of the site. I prefer to embrace and enhance then, so why not try and tab through the site and see if you can use it just with your keyboard alone!"
                    ],
                    "subsectionImage" : {
                        "image": "placeholder.png",
                        "alt": "Placeholder"
                    }
                },
               
            ] 
        },
        {
            "h2": "The Polish",
            "subsection": [
                {
                    "h3": "Interactions",
                    "copy": [
                        "When I've got the key core functionality and content locked down, I can start to have some fun with things and inject moments of delight across the site. You'll have probably encountered some of these on your way to this project (unless you've set a preference for not wanting things to move around)."
                    ],
                    "subsectionImage" : {
                        "image": "placeholder-shallow.png",
                        "alt": "Placeholder"
                    }
                },
                {
                    "h3": "Inheriting users preferences",
                    "copy": [
                        "Most modern browsers have the ability to indetify some of your operating system preferences that indicate how you want things to behave. The most popular being whether you like browsing in light mode or dark mode, but also things such as whether you don't like things moving or animating as they cause feelings of nausea."
                    ],
                    "subsectionImage" : {
                        "image": "placeholder-shallow.png",
                        "alt": "Placeholder"
                    }
                },
                {
                    "h3": "Regular refinement",
                    "copy": [
                        "I'm a big believer in testing and iterating, so this will continue to grow and improve over time."
                    ],
                    "subsectionImage" : {
                        "image": "placeholder-shallow.png",
                        "alt": "Placeholder"
                    }
                }                     
            ] 
        },
    ]
    },
    {
        "title": "Ligamend - ACL Injury Support Community",
        "SEOTitle": "Ligamend - ACL Knee Injury Support Community",
        "SEODescription": "Building a platform and community for those who have sufferered from an Anterior Cruciate Ligament injury.",
        "keywords": "Ligamend, ACL, acl, Anterior Cruciate Ligament, sprain, knee ligaments, injury support group, support group, physio, physical therapy, recovery, knee rehabilitation, post-injury support",
        "path": "ligamend/",
        "headerImage": <Ligamend />,
        "headerAlt": "Portfolio for all header image",
        "intro": [
            "Building a support community set up to aid the rehabilitation of people who have suffered an anterior cruciate ligament (ACL) injury."
        ],
        "url": "ligamend",
        "id": "1",
        "background" : [
            {
                "h2": "Background",
                "subsection": [
                    {
                        "h3": "The Anterior Cruciate Ligament (ACL)",
                        "copy": [
                            "Like most active people, I enjoy keeping fit through playing sport, and I know sprains and strains are part of the package. However, sometimes it's more than a sprain, and it's at those serious moments that you need somewhere to turn for support, but more importantly hope.",
                            "The ACL is one of four major ligaments in the knee, it serves to act as a stabiliser that prevents your knee from bending too far in any direction. The injury itself is commonly associated with sports that involve sudden stops and changes in direction, this can result in the ligament stretching or even tearing.",
                            "The main course of action, for those who opt for it, is surgery followed by several months of physical therapy. It's safe to say that the whole process is draining both mentally and physically, and the long road to recovery can be very isolating."
                        ]
                    }
                ],
                "responsibilities": [
                    {
                        "h3": "Responsibilities",
                        "skills": [
                            "Branding",
                            "Illustration",
                            "UI Design"
                        ]
                    }
                ],
                "featuredImage": {
                    "image": "header.jpg",
                    "alt": "Header divider"
                }
          }
        ],
        "article" : [
            {
                "h2": "Statement of Intent",
                "subsection": [
                    {
                        "h3": "Aims",
                        "copy": [
                            "My ambition with this project is to create a positive, supportive community that can offer informative resources and a support network for people who have suffered from an anterior cruciate ligament injury."
                        ],
                        "subsectionImage" : {
                            "image": "knee-injury.jpg",
                            "alt": "Knee injury recovery"
                        }
                    },
                    {
                        "h3": "Outcomes",
                        "copy": [
                            "The main outcome I hope to achieve is to inspire and empower those who have suffered from this injury and I believe the best medium to do so is by creating a brand that encourages people on their road to recovery."
                        ],
                        "subsectionImage" : {
                            "image": "statement-of-intent.png",
                            "alt": "Statement of intent"
                        }
                    }
                ] 
            },
            {
                "h2": "Inspiration",
                "subsection": [
                    {
                        "h3": "Building a support community",
                        "copy": [
                            "One of the first things that I did was to see the ways in which support was offered to those who suffered from physical ailments. After extensive UK specific research, the charitable organisation that struck the perfect tone with exemplary support offerings was Macmillan Cancer Support. Their human centric brand has provided people with the support they have needed since its foundation."
                        ],
                        "subsectionImage" : {
                            "image": "inspiration.png",
                            "alt": "Inspiration"
                        }
                    },
                    {
                        "h3": "Building a brand",
                        "copy": [
                            "By building the Macmillan brand, the organisation has allowed itself to become a powerful tool in their mission to reach those who are in need and inspire people to support their cause. By producing such a recognisable brand, it instills trust and facilitates their cause."
                        ],
                        "subsectionImage" : {
                            "image": "",
                            "alt": ""
                        }
                    }
                ] 
            },
            {
                "h2": "Visual Branding",
                "subsection": [
                    {
                        "h3": "Visual",
                        "copy": [
                            "I went through a series of back and forths choosing an appropriate shape form and colourway that I felt could represent the organisation in the most sympathetic manner. The concept behind the logo I created is that it replicates the shape of the ligament within the knee itself, with the two ligaments wrapping around one another to create an ‘x’ like shape.",
                            "It is composed of triangles due to characteristics of the shape. It stands alone, strong but alienated, however it has the capability to be much more. When together with other triangles, they create beautiful forms, fitting alongside one another, reflecting the strong supportive community it hopes to embody.",
                            "The colourway is, in my opinion, one of the most important features of a brand. I led with the idea of transition, reflecting the idea of injury through to recovery; a concept applied to the mark through the gradient of colour present in the triangles."
                        ],
                        "subsectionImage" : {
                            "image": "visual-branding.jpg",
                            "alt": "Visual branding"
                        }
                    }
                ] 
            },
            {
                "h2": "Tonal Branding",
                "subsection": [
                    {
                        "copy": [
                            "The tone of the brand had to be sympathetic, understanding what people are suffering from and the best way to support that. Having spoken to others during both my time in the hospital and then also during rehabilitation classes, it soon became apparent that they were all keen to get back to being active again and to come back just as strong as before. This pairing of recovery and progression formed the basis for a lot of the content as it focuses not only on the present but the next step."
                        ],
                        "subsectionImage" : {
                            "image": "tonal-branding.png",
                            "alt": "Tonal branding"
                        }
                    }
                ] 
            },
            {
                "h2": "Emotional Branding",
                "subsection": [
                    {
                        "copy": [
                            "When you're physically restricted, accessibility to content is more important that ever. By engaging with Instagram, it provided a platform for people to share their experiences, promote their journeys and interact with others in order to see what they're going through and where they're heading.",
                            "By showcasing public and non-public figures and their journeys, it helped to humanise the experience and to demonstrate that while it is a struggle, it is possible to get yourself back to where you were."
                        ],
                        "subsectionImage" : {
                            "image": "emotional-branding.jpg",
                            "alt": "Emotional branding"
                        }
                    }
                ] 
            },
            {
                "h2": "Reaching The Audience",
                "subsection": [
                    {
                        "h3": "A platform to offer advice",
                        "copy": [
                            "We live in an era where information is more accessible than ever, and as such the best way to get information to the audience is to publish it online. An ACL injury can often make any movement difficult, so the idea of booking an appointment to travel to see a doctor isn't beneficial in the immediacy. From a personal perspective, the first doctor I visited said that he was unable to diagnose the extent of my injury due to excessive swelling, so I was advised to rest and apply ice. Now, if there was a place that had answers specific to my problem, I would have saved both the doctors time, and my own. Something to consider...",
                            "Requires responsive web design examples."
                        ],
                        "subsectionImage" : {
                            "image": "web-presence.jpg",
                            "alt": "Reaching the audience web mockup"
                        }
                    },
                    {
                        "h3": "Sharing experiences",
                        "copy": [
                            "Blog post example, encouraging others to improve. Show interactive UI with posts and people following / liking the responses"
                        ],
                        "subsectionImage" : {
                            "image": "placeholder.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "Getting the answers you need",
                        "copy": [
                            "A feeling that is common among recovering patients is loneliness, it is a time where you can feel isolated, so getting instant answers from people who have been going through something similar can offer a little lift. The idea of having a chat functionality is something that would be very useful, as demonstrated in the interactive chat below.",
                            "Change this to to a video using the prototype."
                        ],
                        "subsectionImage" : {
                            "image": "reaching-out.png",
                            "alt": "Web chat"
                        }
                    }
                ] 
            },
            {
                "h2": "Proactive Steps",
                "subsection": [
                    {
                        "h3": "Rolling out support kits",
                        "copy": [
                            "Of course talking about post-injury communication is important, but even more important is preventative measures. Something that I wanted to do was design a kit to send out to sports teams, something to help educate them on how to deal with small niggles before they turn into something more serious.",
                            "It's not uncommon to pick up knocks and sprains playing sports, so suggestions for recovery ideas and exercises that could be implemented as part of training or warm ups could go a long way towards injury prevention."
                        ],
                        "subsectionImage" : {
                            "image": "support-kit.jpg",
                            "alt": "Support kit mockup"
                        }
                    },
                    {
                        "h3": "Exercise examples",
                        "copy": [
                            "Show animated example of the image illustrations version"
                        ],
                        "subsectionImage" : {
                            "image": "step-ups.png",
                            "alt": "Step up exercise illustration"
                        }
                    }
                ] 
            }
        ]
    },
    {
        "title": "Enriched Site Search",
        "SEOTitle": "How To Improve Engagement Through Enriched Site Search",
        "SEODescription": "Overview of how to improve site search through enriched content and semantic searches.",
        "keywords": "E-commerce, enriched search, site search, semantic search, bloomreach, simple search, search images, search preview, search optimisation",
        "path": "autocomplete/",
        "headerImage":  <EnrichedSearch />,
        "headerAlt": "Portfolio for all header image",
        "intro": [
            "As stock diversifies, taxonomies grow and it gets just that much more difficult to find anything.",
            "Giving the consumers an alternative means of finding products helps alleviate the pressure of mislabelling menus or categories."
        ],
        "url": "enriched-autocomplete",
        "id": "2",
        "background" : [
            {
                "h2": "Background",
                "subsection": [
                    {
                        "copy": [
                            "As online shopping sites transition to mobile first experience, giving the user a better search experience to cut through the product catalogue faster has never been more important.",
                        ], 
                    }
                ],
                "responsibilities": [
                    {
                        "h3": "Responsibilities",
                        "skills": [
                            "Design",
                            "Copywriting",
                            "Front-End Development"
                        ]
                    }
                ],
                "featuredImage": {
                    "image": "placeholder.png",
                    "alt": "Placeholder"
                }
          }
        ],
        "article" : [
            {
                "h2": "Dummy Content",
                "subsection": [
                    {
                        "copy": [
                            "Detailed stuff coming real soon!",
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    }
                ]
            }
        ]
    },
    {
        "title": "Website Redesign Using Heuristics",
        "SEOTitle": "How To Improve User Experience Using Heuristics",
        "SEODescription": "Improving user experience, raising product awareness, and increasing website incoming leads.",
        "keywords": "user experience, heuristics, KPIs, complete an evaluation, varying illustration styles, aesthetic, recognition, flexibility, user control, scoping, journey mapping, building an interactive prototype, webflow, tone and terminology",
        "path": "heuristics/",
        "headerImage":  <Heuristic />,
        "headerAlt": "Portfolio for all header image",
        "intro": [
            "Improving user experience, raising product awareness, and increasing website incoming leads."
        ],
        "url": "web-redesign-heuristics",
        "id": "3",
        "background" : [
            {
                "h2": "Background",
                "subsection": [
                    {
                        "copy": [
                            "As business requirements and KPIs change, it means a shift in the way that services are marketed. A key factor in educating customers is through the website, so as part of this refocus, I took the opportunity to redesign it based off a review using a heuristic approach.",
                        ], 
                    }
                ],
                "responsibilities": [
                    {
                        "h3": "Responsibilities",
                        "skills": [
                            "Heuristic Evaluation",
                            "Web Design",
                            "Marketing Support"
                        ]
                    }
                ],
                "featuredImage": {
                    "image": "placeholder.png",
                    "alt": "Placeholder"
                }
          }
        ],
        "article" : [
            {
                "h2": "Evaluation of Existing Website",
                "subsection": [
                    {
                        "copy": [
                            "What I set about doing first was to complete an evaluation of the old website. This consisted of selecting five relevant heuristic techniques from Nielsen and Molich’s user interface design guidelines.",
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "Consistency and standards",
                        "bullet": [
                            "Two different colour call to actions, confusing as to what action will be completed",
                            "High reliance on stock imagery, not consistent",
                            "Varying illustration styles",
                            "Some references made in copy are inconsistent with new terminology",
                            "Partner logos used in white, not necessarily in line with their brand guidelines"
                        ],
                        "subsectionImage" : {
                            "image": "",
                            "alt": ""
                        }
                    },
                    {
                        "h3": "Recognition rather than recall",
                        "bullet": [
                            "Very copy heavy, can be perceived as intimidating to users",
                            "While reading the page, there are several links away from the page that are more visually appealing, but actually have little to do with the task at hand - it makes it difficult to stay on task",
                            "Natural process is to progress down the page, and at that point, you lose sight of the call to action buttons and can forget what the options are"
                        ],
                        "subsectionImage" : {
                            "image": "",
                            "alt": ""
                        }
                    },
                    {
                        "h3": "Aesthetic and minimalist design",
                        "bullet": [
                            "Very feature heavy page within a limited space",
                            "Layout of copy is very intimidating",
                            "Despite having light colour tones throughout, it is primarily a grey design, which dominates attention and leads away from the information on the page"
                        ],
                        "subsectionImage" : {
                            "image": "",
                            "alt": ""
                        }
                    },
                    {
                        "h3": "Flexibility and efficiency of use",
                        "bullet": [
                            "Difficult to quickly access the featured product page",
                            "Once on one form page, it is difficult to navigate away from or choose another product",
                            "Call to action is prominent, useful for linear approach"
                        ],
                        "subsectionImage" : {
                            "image": "",
                            "alt": ""
                        }
                    },
                    {
                        "h3": "User control and freedom",
                        "bullet": [
                            "Difficult to quickly access the featured product page",
                            "Linear approach, good for getting to forms, but not adaptable for multiple products",
                            "Self generated exploration isn't encouraged"
                        ],
                        "subsectionImage" : {
                            "image": "",
                            "alt": ""
                        }
                    },
                ]
            },
            {
                "h2": "Scoping",
                "subsection": [
                    {
                        "copy": [
                            "Having identified the necessary elements to focus on in the improvement of the end user, it was also necessary to work out what was needed to make the process easier to maintain from a marketing and content perspective. It was agreed that we would have a multiple site website and have the functionality to create a country should the need arise.",
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "Required business objectives",
                        "bullet": [
                            "Ability to create new country specific websites",
                            "Full form customisability with certain ones pushing information into the CRM",
                            "Visual overhaul of website",
                            "Improved user experience",
                            "Be built with expansion in mind"
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                ]
            },
            {
                "h2": "Journey Mapping",
                "subsection": [
                    {
                        "copy": [
                            "With the scoping documents agreed and necessities outlined, I set about working out how to visually represent each page in a way that would allow the user to be best informed and support their goals. This included several internal meetings and visits to the web development agency to determine what is possible and suggested best practices that serve our purpose best. In order to ensure that I addressed all the problematic areas that I discovered when conducting my initial heuristic evaluation, I conducted another when I reached the high fidelity mockup phase."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    }
                ]
            },
            {
                "h2": "Design and Re-evaluation",
                "subsection": [
                    {
                        "h3": "Consistency and standards",
                        "copy": [
                            "My main aim from a visual standpoint was to create a consistent method of implementing visuals throughout the website. This included an overhaul to our call to actions, which are now located on almost every page to drive users towards their goals and an image audit to ensure that software features are represented consistently. Likewise, the marketing manager went through an audit of the content to ensure that the tone and terminology was consistent too."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "Recognition rather than recall",
                        "copy": [
                            "This is to do with minimising the cognitive load. Human attention is limited, and we are only capable of maintaining around five items in our short-term memory at one time. By employing visual representations of product features, it allows the users to recognise features without having to read through the descriptions and recall what they are. This is mirrored again in our literature."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "Aesthetic and minimalist design",
                        "copy": [
                            "The website needed an aesthetic refresh, so I prioritised switching the heavy blocks of content for a lighter, cleaner design with substantial white space allowing the users to focus on the elements that matter without losing content."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "Flexibility and efficiency of use",
                        "copy": [
                            "The primary business aim of the website is to educate and on-board new customers. A secondary aim is to encourage existing customers to invest in new products. Users who are unfamiliar with the product and company are presented with an overview of what the company does and can explore this through the home page.",
                            "Users who visit the website and are already familiar with what we do are able to accomplish the actions they want by immediately booking a trial by clicking on the main call to action button."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "User control and freedom",
                        "copy": [
                            "It is the nature of websites that employ multi-page design that you can navigate back and forth, however it doesn’t always allow you contextual clues as to where you are. A big focus I made was to include a header, so that you know what section of the website you are on, as well as having a clearly identifiable breadcrumb trail so you can see where the feature you are on fits into the product you want as well as working your way backwards."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    }
                ]
            },
            {
                "h2": "Building An Interactive Prototype",
                "subsection": [
                    {
                        "copy": [
                            "While wireframing and getting an idea of how the website should look, it is often easy to overlook features and functionality that could cause problems. So I decided to take it upon myself to build a working interactive prototype of my website design in order to give it some context and to bring it to life.",
                            "Using the website building software Webflow, I was able to replicate my developed wireframes and also explore additional functionality that I hadn't even considered introducing."
                        ],
                        // "link": {
                        //     "url": "https://www.imperosoftware.com/uk/",
                        //     "text": "Visit the website"
                        // },
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    }
                ]
            },
            {
                "h2": "Final Website Designs",
                "subsection": [
                    {
                        "h3": "Homepage",
                        "copy": [
                            "Having identified the necessary elements to focus on in the improvement of the end user, it was also necessary to work out what was needed to make the process easier to maintain from a marketing perspective. It was agreed that we would have a multiple site website and have the functionality to create a country should the need arise."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    }
                ]
            },
            {
                "h2": "Roll Out of Website",
                "subsection": [
                    {
                        "copy": [
                            "With the website designs approved and with the templates built it came to the task of populating the sites. It has been decided that we would launch with 8 region and content specific websites, a task which fell to me and the marketing manager to complete. As each site has content relevant to it alone, it meant that bulk creation wasn't as simple as planned, we could implement imagery and general pages and broadcast them across the sites, but each page required proofing and tailoring as required.",
                            "As a way of making all imagery consistent, I designed and implemented over 300 new images, most of which are in SVG form for maximum scalability as well as going back through the predated pages and posts and refreshing their visual style."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    }
                ]
            },
            {
                "h2": "Improving Incoming Enquiries",
                "subsection": [
                    {
                        "h3": "Versatile forms",
                        "copy": [
                            "Like many B2B companies, Impero uses it's website in order to generate leads. This is the culmination of marketing strategies and brand exposure. In order to capitalise on the ease of use with the new website, several new methods of obtaining such leads were implemented. These included the installation of gravity forms, an easy to manipulate form system that allows for forms to be created ad-hoc and to be added to pages when needed."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    },
                    {
                        "h3": "HTML newsletters",
                        "copy": [
                            "In line with the release of the new website, I worked to create variety of refreshed e-shot templates that would are used for all digital marketing. These templates adopted several kinetic techniques including inline CSS animation and a short animated header to make the newsletters more memorable. All of which were designed with fallbacks in place in case of the email client stripping out the kinetic elements. The template was built with expansion in mind, much like website in that as much content as necessary could be added."
                        ],
                        "subsectionImage" : {
                            "image": "placeholder-shallow.png",
                            "alt": "Placeholder"
                        }
                    }
                ]
            },
        ]
    }
] 
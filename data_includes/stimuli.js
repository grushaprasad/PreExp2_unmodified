var shuffleSequence = seq("setcounter","intro", "demographic", "instructions", "beginning_of_practice", sepWith("practice_sep", "practice"), "practice_sep", "end_of_practice", "spacebar",
                          sepWith("sep", seq(anyOf("filler68", "filler69", "filler64", "filler65", "filler66", "filler67", "filler60", "filler61", "filler62", "filler63", "NPS11_unambig_unmodified", "NPZ17_ambig_unmodified", "NPS20_unambig_unmodified", "filler79", "NPZ11_unambig_unmodified", "filler77", "filler76", "filler75", "filler74", "filler73", "filler72", "filler71", "filler70", "NPS3_ambig_unmodified", "NPZ2_unambig_unmodified", "filler6", "NPS9_ambig_unmodified", "NPS18_ambig_unmodified", "NPZ16_ambig_unmodified", "NPS16_ambig_unmodified", "filler42", "filler43", "filler40", "filler41", "filler46", "filler47", "filler44", "filler45", "filler48", "filler49", "filler56", "NPS7_ambig_unmodified", "NPS10_ambig_unmodified", "NPS2_unambig_unmodified", "NPZ19_ambig_unmodified", "filler55", "filler54", "filler57", "filler12", "filler51", "filler50", "filler53", "filler52", "filler59", "filler58", "NPZ5_ambig_unmodified", "NPZ10_ambig_unmodified", "filler16", "NPS5_unambig_unmodified", "NPZ12_unambig_unmodified", "NPS14_unambig_unmodified", "NPZ13_unambig_unmodified", "NPZ7_ambig_unmodified", "filler20", "filler21", "filler22", "filler23", "filler24", "filler25", "filler26", "filler27", "filler28", "filler29", "NPS4_ambig_unmodified", "NPS15_unambig_unmodified", "filler33", "filler32", "filler31", "filler30", "filler37", "filler36", "filler35", "filler34", "filler39", "filler38", "NPZ20_unambig_unmodified", "NPZ14_unambig_unmodified", "NPZ4_unambig_unmodified", "NPS8_unambig_unmodified", "NPS17_ambig_unmodified", "NPZ1_ambig_unmodified", "filler78", "filler80", "filler9", "filler8", "filler5", "filler4", "filler7", "NPZ6_ambig_unmodified", "filler1", "NPZ8_ambig_unmodified", "filler3", "filler2", "filler19", "filler18", "NPS6_unambig_unmodified", "NPS1_ambig_unmodified", "filler11", "filler10", "filler13", "NPS19_ambig_unmodified", "filler15", "filler14", "filler17", "NPS12_unambig_unmodified", "NPZ9_ambig_unmodified", "NPZ15_unambig_unmodified", "NPZ3_unambig_unmodified", "NPS13_unambig_unmodified", "NPZ18_unambig_unmodified"))
                            ),"participant_observations", "sr", "end_of_experiment");

var practiceItemTypes = ["practice"];

var manualSendResults = true;

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Please wait for the next sentence.",
        ignoreFailure: true
    },
    "DashedSentence", {
        hideProgressBar: true,
        mode: "self-paced reading"
    },

    "Question", {
        hideProgressBar: true,
        hasCorrect: true,
        presentHorizontally: true,
        randomOrder: false,
        as: [["z","Yes"], ["m","No"]]
    },
    "Message", {
        hideProgressBar: true,
        transfer: "keypress"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
    }
];

var items = [
["practice_sep", "Separator", {transfer: 1000}], 
["sr", "__SendResults__", {}], 
['spacebar','Separator', {transfer: 2000,  normalMessage: "Press spacebar on next screen to reveal words."}],
    
["sep", "Separator", { transfer: 1000 }],
["intro", "Form", { html: { include: "intro.html" }}],
["demographic", "Form", { html: { include: "demographic.html" }}],
["instructions", "Message",{html: {include: "instructions.html"}}],

["beginning_of_practice", "Message", {html: "<p>Let's start with a few practice sentences. As a reminder, press <b> z </b> if the answer is yes and <b> m </b> if the answer is no</p> <p> Press any key to begin </p>" }],

["practice", "DashedSentence", {s: "The activists were tired of all the red tape involved in getting the new policy passed."}, "Question", {q: "Was it easy to get the policy passed?"}],
["practice", "DashedSentence", {s: "My classmates were bored to death while reading War and Peace."}, "Question", {q: "Did my classmates find War and Peace enjoyable?"}],
["practice", "DashedSentence", {s: "The members of the audience were moved to tears by the performance."}, "Question", {q: "Was it an emotional performance?"}],

["end_of_practice", "Message", {html: "<p>You've reached the end of practice. On to the real experiment! As a reminder, press <b> z </b> if the answer is yes and <b> m</b> if the answer is no</p> <p> Press any key to begin. </p>"}],

[["filler30",1], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
[["filler30",1], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
did not find yes or no
[["NPS19_ambig_unmodified",1], "DashedSentence", {s: "The lawyer established the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS19_unambig_unmodified",1], "DashedSentence", {s: "The lawyer established that the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler1",1], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],
[["filler1",1], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ11_ambig_unmodified",1], "DashedSentence", {s: "Although the candidates debated the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ11_unambig_unmodified",1], "DashedSentence", {s: "Although the candidates debated, the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS16_unambig_unmodified",[2,1]], "DashedSentence", {s: "The priest recognized that two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS16_ambig_unmodified",[2,1]], "DashedSentence", {s: "The priest recognized two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler56",[2,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
[["filler56",[2,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
[["filler65",[2,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
[["filler65",[2,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
[["filler79",[2,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler79",[2,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler7",[3,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
[["filler7",[3,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
[["filler47",[3,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
[["filler47",[3,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
did not find yes or no
[["NPS15_ambig_unmodified",[3,1]], "DashedSentence", {s: "The soldiers remembered the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS15_unambig_unmodified",[3,1]], "DashedSentence", {s: "The soldiers remembered that the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS13_ambig_unmodified",[3,1]], "DashedSentence", {s: "The tourists saw the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS13_unambig_unmodified",[3,1]], "DashedSentence", {s: "The tourists saw that the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ5_ambig_unmodified",[4,1]], "DashedSentence", {s: "Once the child played the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ5_unambig_unmodified",[4,1]], "DashedSentence", {s: "Once the child played, the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ7_ambig_unmodified",[4,1]], "DashedSentence", {s: "After the kids cheated the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ7_unambig_unmodified",[4,1]], "DashedSentence", {s: "After the kids cheated, the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler64",[4,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler64",[4,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler40",[4,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
[["filler40",[4,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
[["filler33",[5,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
[["filler33",[5,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
[["filler36",[5,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
[["filler36",[5,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
[["filler63",[5,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
[["filler63",[5,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
did not find yes or no
[["NPS12_ambig_unmodified",[5,1]], "DashedSentence", {s: "The woman noticed the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS12_unambig_unmodified",[5,1]], "DashedSentence", {s: "The woman noticed that the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler52",[6,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
[["filler52",[6,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
did not find yes or no
[["NPS20_unambig_unmodified",[6,1]], "DashedSentence", {s: "The store guaranteed that the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS20_ambig_unmodified",[6,1]], "DashedSentence", {s: "The store guaranteed the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler46",[6,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler46",[6,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler68",[6,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
[["filler68",[6,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
[["filler74",[7,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
[["filler74",[7,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
[["filler57",[7,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
[["filler57",[7,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ17_unambig_unmodified",[7,1]], "DashedSentence", {s: "Before the tribe worshipped, the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ17_ambig_unmodified",[7,1]], "DashedSentence", {s: "Before the tribe worshipped the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ9_unambig_unmodified",[7,1]], "DashedSentence", {s: "Even_though the girl phoned, the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ9_ambig_unmodified",[7,1]], "DashedSentence", {s: "Even_though the girl phoned the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS7_ambig_unmodified",[8,1]], "DashedSentence", {s: "The apprentice forgot the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS7_unambig_unmodified",[8,1]], "DashedSentence", {s: "The apprentice forgot that the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler22",[8,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
[["filler22",[8,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
[["filler76",[8,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler76",[8,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler70",[8,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
[["filler70",[8,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
[["filler35",[9,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
[["filler35",[9,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
did not find yes or no
[["NPS6_ambig_unmodified",[9,1]], "DashedSentence", {s: "The worker maintained the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS6_unambig_unmodified",[9,1]], "DashedSentence", {s: "The worker maintained that the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler56",[9,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
[["filler56",[9,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
[["filler20",[9,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
[["filler20",[9,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
did not find yes or no
[["NPS8_unambig_unmodified",[10,1]], "DashedSentence", {s: "The committee mentioned that the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS8_ambig_unmodified",[10,1]], "DashedSentence", {s: "The committee mentioned the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler63",[10,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
[["filler63",[10,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
[["filler12",[10,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
[["filler12",[10,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
[["filler80",[10,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler80",[10,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler11",[11,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
[["filler11",[11,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ6_unambig_unmodified",[11,1]], "DashedSentence", {s: "As the couple danced, the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ6_ambig_unmodified",[11,1]], "DashedSentence", {s: "As the couple danced the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ13_ambig_unmodified",[11,1]], "DashedSentence", {s: "In_case the team lost the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ13_unambig_unmodified",[11,1]], "DashedSentence", {s: "In_case the team lost, the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler62",[11,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
[["filler62",[11,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ13_unambig_unmodified",[12,1]], "DashedSentence", {s: "In_case the team lost, the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ13_ambig_unmodified",[12,1]], "DashedSentence", {s: "In_case the team lost the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler69",[12,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
[["filler69",[12,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
[["filler13",[12,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
[["filler13",[12,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
did not find yes or no
[["NPS18_unambig_unmodified",[12,1]], "DashedSentence", {s: "The owners insured that the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS18_ambig_unmodified",[12,1]], "DashedSentence", {s: "The owners insured the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler15",[13,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler15",[13,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler19",[13,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
[["filler19",[13,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
did not find yes or no
[["NPS9_unambig_unmodified",[13,1]], "DashedSentence", {s: "The army found that the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS9_ambig_unmodified",[13,1]], "DashedSentence", {s: "The army found the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler6",[13,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
[["filler6",[13,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
[["filler60",[14,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
[["filler60",[14,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ12_ambig_unmodified",[14,1]], "DashedSentence", {s: "Because the train stopped the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ12_unambig_unmodified",[14,1]], "DashedSentence", {s: "Because the train stopped, the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler18",[14,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
[["filler18",[14,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
[["filler58",[14,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler58",[14,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler78",[15,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler78",[15,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler2",[15,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
[["filler2",[15,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ1_unambig_unmodified",[15,1]], "DashedSentence", {s: "Even_though the band left, the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ1_ambig_unmodified",[15,1]], "DashedSentence", {s: "Even_though the band left the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler37",[15,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
[["filler37",[15,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
[["filler42",[16,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
[["filler42",[16,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
[["filler71",[16,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler71",[16,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler17",[16,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
[["filler17",[16,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ14_ambig_unmodified",[16,1]], "DashedSentence", {s: "After the librarian called the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ14_unambig_unmodified",[16,1]], "DashedSentence", {s: "After the librarian called, the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS18_ambig_unmodified",[17,1]], "DashedSentence", {s: "The owners insured the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS18_unambig_unmodified",[17,1]], "DashedSentence", {s: "The owners insured that the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS15_unambig_unmodified",[17,1]], "DashedSentence", {s: "The soldiers remembered that the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS15_ambig_unmodified",[17,1]], "DashedSentence", {s: "The soldiers remembered the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS6_ambig_unmodified",[17,1]], "DashedSentence", {s: "The worker maintained the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS6_unambig_unmodified",[17,1]], "DashedSentence", {s: "The worker maintained that the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler67",[17,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
[["filler67",[17,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
[["filler8",[18,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
[["filler8",[18,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
[["filler45",[18,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler45",[18,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler27",[18,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
[["filler27",[18,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ5_unambig_unmodified",[18,1]], "DashedSentence", {s: "Once the child played, the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ5_ambig_unmodified",[18,1]], "DashedSentence", {s: "Once the child played the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler32",[19,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
[["filler32",[19,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
[["filler59",[19,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler59",[19,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler23",[19,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler23",[19,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler22",[19,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
[["filler22",[19,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ9_ambig_unmodified",[20,1]], "DashedSentence", {s: "Even_though the girl phoned the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ9_unambig_unmodified",[20,1]], "DashedSentence", {s: "Even_though the girl phoned, the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ16_unambig_unmodified",[20,1]], "DashedSentence", {s: "While the narrator read, the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ16_ambig_unmodified",[20,1]], "DashedSentence", {s: "While the narrator read the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler75",[20,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler75",[20,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler16",[20,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler16",[20,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler49",[21,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
[["filler49",[21,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
[["filler44",[21,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
[["filler44",[21,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ4_ambig_unmodified",[21,1]], "DashedSentence", {s: "Because the class failed the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ4_unambig_unmodified",[21,1]], "DashedSentence", {s: "Because the class failed, the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler32",[21,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
[["filler32",[21,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
[["filler13",[22,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
[["filler13",[22,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
[["filler38",[22,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
[["filler38",[22,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
[["filler10",[22,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
[["filler10",[22,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
[["filler59",[22,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler59",[22,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler61",[23,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
[["filler61",[23,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
[["filler58",[23,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler58",[23,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler74",[23,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
[["filler74",[23,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
did not find yes or no
[["NPS1_unambig_unmodified",[23,1]], "DashedSentence", {s: "The employees understood that the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS1_ambig_unmodified",[23,1]], "DashedSentence", {s: "The employees understood the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ17_unambig_unmodified",[24,1]], "DashedSentence", {s: "Before the tribe worshipped, the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ17_ambig_unmodified",[24,1]], "DashedSentence", {s: "Before the tribe worshipped the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler72",[24,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
[["filler72",[24,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
did not find yes or no
[["NPS19_unambig_unmodified",[24,1]], "DashedSentence", {s: "The lawyer established that the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS19_ambig_unmodified",[24,1]], "DashedSentence", {s: "The lawyer established the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler61",[24,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
[["filler61",[24,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
[["filler50",[25,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
[["filler50",[25,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ4_ambig_unmodified",[25,1]], "DashedSentence", {s: "Because the class failed the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ4_unambig_unmodified",[25,1]], "DashedSentence", {s: "Because the class failed, the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler33",[25,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
[["filler33",[25,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
did not find yes or no
[["NPS4_unambig_unmodified",[25,1]], "DashedSentence", {s: "The traveler heard that the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS4_ambig_unmodified",[25,1]], "DashedSentence", {s: "The traveler heard the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS17_ambig_unmodified",[26,1]], "DashedSentence", {s: "The reporter revealed the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS17_unambig_unmodified",[26,1]], "DashedSentence", {s: "The reporter revealed that the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler5",[26,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
[["filler5",[26,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ3_ambig_unmodified",[26,1]], "DashedSentence", {s: "Although the maid cleaned the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ3_unambig_unmodified",[26,1]], "DashedSentence", {s: "Although the maid cleaned, the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler31",[26,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
[["filler31",[26,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
[["filler12",[27,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
[["filler12",[27,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
did not find yes or no
[["NPS1_unambig_unmodified",[27,1]], "DashedSentence", {s: "The employees understood that the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS1_ambig_unmodified",[27,1]], "DashedSentence", {s: "The employees understood the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler19",[27,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
[["filler19",[27,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ7_unambig_unmodified",[27,1]], "DashedSentence", {s: "After the kids cheated, the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ7_ambig_unmodified",[27,1]], "DashedSentence", {s: "After the kids cheated the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler51",[28,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler51",[28,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler67",[28,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
[["filler67",[28,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
[["filler69",[28,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
[["filler69",[28,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
[["filler25",[28,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
[["filler25",[28,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ19_unambig_unmodified",[29,1]], "DashedSentence", {s: "As the customer paid, the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ19_ambig_unmodified",[29,1]], "DashedSentence", {s: "As the customer paid the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler27",[29,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
[["filler27",[29,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
[["filler55",[29,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
[["filler55",[29,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ20_ambig_unmodified",[29,1]], "DashedSentence", {s: "While the artist painted the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ20_unambig_unmodified",[29,1]], "DashedSentence", {s: "While the artist painted, the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler31",[30,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
[["filler31",[30,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
did not find yes or no
[["NPS3_ambig_unmodified",[30,1]], "DashedSentence", {s: "The old_man recalled the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS3_unambig_unmodified",[30,1]], "DashedSentence", {s: "The old_man recalled that the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS8_ambig_unmodified",[30,1]], "DashedSentence", {s: "The committee mentioned the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS8_unambig_unmodified",[30,1]], "DashedSentence", {s: "The committee mentioned that the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler2",[30,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
[["filler2",[30,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
did not find yes or no
[["NPS5_unambig_unmodified",[31,1]], "DashedSentence", {s: "The journalist confirmed that the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS5_ambig_unmodified",[31,1]], "DashedSentence", {s: "The journalist confirmed the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler28",[31,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
[["filler28",[31,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
[["filler8",[31,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
[["filler8",[31,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
[["filler14",[31,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler14",[31,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler64",[32,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler64",[32,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler80",[32,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler80",[32,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler47",[32,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
[["filler47",[32,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
[["filler71",[32,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler71",[32,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler29",[33,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
[["filler29",[33,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
did not find yes or no
[["NPZ11_unambig_unmodified",[33,1]], "DashedSentence", {s: "Although the candidates debated, the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ11_ambig_unmodified",[33,1]], "DashedSentence", {s: "Although the candidates debated the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler11",[33,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
[["filler11",[33,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
[["filler38",[33,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
[["filler38",[33,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ15_ambig_unmodified",[34,1]], "DashedSentence", {s: "Even_though the army surrendered the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ15_unambig_unmodified",[34,1]], "DashedSentence", {s: "Even_though the army surrendered, the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler21",[34,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
[["filler21",[34,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
did not find yes or no
[["NPS17_unambig_unmodified",[34,1]], "DashedSentence", {s: "The reporter revealed that the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS17_ambig_unmodified",[34,1]], "DashedSentence", {s: "The reporter revealed the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ19_unambig_unmodified",[34,1]], "DashedSentence", {s: "As the customer paid, the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ19_ambig_unmodified",[34,1]], "DashedSentence", {s: "As the customer paid the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler65",[35,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
[["filler65",[35,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
did not find yes or no
[["NPS4_unambig_unmodified",[35,1]], "DashedSentence", {s: "The traveler heard that the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS4_ambig_unmodified",[35,1]], "DashedSentence", {s: "The traveler heard the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler54",[35,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler54",[35,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler7",[35,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
[["filler7",[35,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
did not find yes or no
[["NPS13_unambig_unmodified",[36,1]], "DashedSentence", {s: "The tourists saw that the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS13_ambig_unmodified",[36,1]], "DashedSentence", {s: "The tourists saw the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler70",[36,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
[["filler70",[36,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ16_unambig_unmodified",[36,1]], "DashedSentence", {s: "While the narrator read, the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ16_ambig_unmodified",[36,1]], "DashedSentence", {s: "While the narrator read the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS14_ambig_unmodified",[36,1]], "DashedSentence", {s: "The scientist proved the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS14_unambig_unmodified",[36,1]], "DashedSentence", {s: "The scientist proved that the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler14",[37,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler14",[37,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler17",[37,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
[["filler17",[37,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
[["filler72",[37,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
[["filler72",[37,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
[["filler41",[37,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
[["filler41",[37,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
[["filler16",[38,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler16",[38,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler55",[38,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
[["filler55",[38,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ12_ambig_unmodified",[38,1]], "DashedSentence", {s: "Because the train stopped the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ12_unambig_unmodified",[38,1]], "DashedSentence", {s: "Because the train stopped, the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler26",[38,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
[["filler26",[38,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
[["filler40",[39,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
[["filler40",[39,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
[["filler53",[39,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler53",[39,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler77",[39,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
[["filler77",[39,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ18_ambig_unmodified",[39,1]], "DashedSentence", {s: "In_case the manager quit the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ18_unambig_unmodified",[39,1]], "DashedSentence", {s: "In_case the manager quit, the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler4",[40,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
[["filler4",[40,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
did not find yes or no
[["NPS9_ambig_unmodified",[40,1]], "DashedSentence", {s: "The army found the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS9_unambig_unmodified",[40,1]], "DashedSentence", {s: "The army found that the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS11_ambig_unmodified",[40,1]], "DashedSentence", {s: "The coach discovered the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS11_unambig_unmodified",[40,1]], "DashedSentence", {s: "The coach discovered that the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler57",[40,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
[["filler57",[40,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
[["filler23",[41,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler23",[41,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler46",[41,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler46",[41,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler42",[41,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
[["filler42",[41,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
[["filler3",[41,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
[["filler3",[41,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
[["filler39",[42,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler39",[42,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler79",[42,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler79",[42,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler45",[42,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler45",[42,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler34",[42,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
[["filler34",[42,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ14_ambig_unmodified",[43,1]], "DashedSentence", {s: "After the librarian called the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ14_unambig_unmodified",[43,1]], "DashedSentence", {s: "After the librarian called, the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler26",[43,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
[["filler26",[43,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
[["filler43",[43,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
[["filler43",[43,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
did not find yes or no
[["NPS5_ambig_unmodified",[43,1]], "DashedSentence", {s: "The journalist confirmed the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS5_unambig_unmodified",[43,1]], "DashedSentence", {s: "The journalist confirmed that the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler54",[44,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler54",[44,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler77",[44,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
[["filler77",[44,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ10_unambig_unmodified",[44,1]], "DashedSentence", {s: "Even_though the janitor vacuumed, the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ10_ambig_unmodified",[44,1]], "DashedSentence", {s: "Even_though the janitor vacuumed the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler21",[44,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
[["filler21",[44,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
did not find yes or no
[["NPS2_ambig_unmodified",[45,1]], "DashedSentence", {s: "The mechanic accepted the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS2_unambig_unmodified",[45,1]], "DashedSentence", {s: "The mechanic accepted that the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ20_ambig_unmodified",[45,1]], "DashedSentence", {s: "While the artist painted the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ20_unambig_unmodified",[45,1]], "DashedSentence", {s: "While the artist painted, the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler4",[45,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
[["filler4",[45,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
[["filler78",[45,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler78",[45,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler37",[46,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
[["filler37",[46,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
[["filler66",[46,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
[["filler66",[46,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
[["filler5",[46,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
[["filler5",[46,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
did not find yes or no
[["NPS16_unambig_unmodified",[46,1]], "DashedSentence", {s: "The priest recognized that two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS16_ambig_unmodified",[46,1]], "DashedSentence", {s: "The priest recognized two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler68",[47,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
[["filler68",[47,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ3_unambig_unmodified",[47,1]], "DashedSentence", {s: "Although the maid cleaned, the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ3_ambig_unmodified",[47,1]], "DashedSentence", {s: "Although the maid cleaned the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler30",[47,1]], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
[["filler30",[47,1]], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
[["filler73",[47,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
[["filler73",[47,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ8_unambig_unmodified",[48,1]], "DashedSentence", {s: "After the mugger attacked, the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ8_ambig_unmodified",[48,1]], "DashedSentence", {s: "After the mugger attacked the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler25",[48,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
[["filler25",[48,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
did not find yes or no
[["NPS3_unambig_unmodified",[48,1]], "DashedSentence", {s: "The old_man recalled that the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS3_ambig_unmodified",[48,1]], "DashedSentence", {s: "The old_man recalled the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler35",[48,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
[["filler35",[48,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
[["filler6",[49,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
[["filler6",[49,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
did not find yes or no
[["NPS12_unambig_unmodified",[49,1]], "DashedSentence", {s: "The woman noticed that the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS12_ambig_unmodified",[49,1]], "DashedSentence", {s: "The woman noticed the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler49",[49,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
[["filler49",[49,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ6_unambig_unmodified",[49,1]], "DashedSentence", {s: "As the couple danced, the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ6_ambig_unmodified",[49,1]], "DashedSentence", {s: "As the couple danced the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ18_unambig_unmodified",[50,1]], "DashedSentence", {s: "In_case the manager quit, the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ18_ambig_unmodified",[50,1]], "DashedSentence", {s: "In_case the manager quit the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler18",[50,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
[["filler18",[50,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ8_unambig_unmodified",[50,1]], "DashedSentence", {s: "After the mugger attacked, the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ8_ambig_unmodified",[50,1]], "DashedSentence", {s: "After the mugger attacked the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler66",[50,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
[["filler66",[50,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
[["filler1",[51,1]], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],
[["filler1",[51,1]], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],
[["filler73",[51,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
[["filler73",[51,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
[["filler52",[51,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
[["filler52",[51,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
did not find yes or no
[["NPS7_unambig_unmodified",[51,1]], "DashedSentence", {s: "The apprentice forgot that the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS7_ambig_unmodified",[51,1]], "DashedSentence", {s: "The apprentice forgot the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler41",[52,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
[["filler41",[52,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ1_ambig_unmodified",[52,1]], "DashedSentence", {s: "Even_though the band left the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ1_unambig_unmodified",[52,1]], "DashedSentence", {s: "Even_though the band left, the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler15",[52,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler15",[52,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler24",[52,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
[["filler24",[52,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
[["filler43",[53,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
[["filler43",[53,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
[["filler48",[53,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
[["filler48",[53,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
[["filler28",[53,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
[["filler28",[53,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
[["filler53",[53,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler53",[53,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler9",[54,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
[["filler9",[54,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
[["filler20",[54,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
[["filler20",[54,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ15_ambig_unmodified",[54,1]], "DashedSentence", {s: "Even_though the army surrendered the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ15_unambig_unmodified",[54,1]], "DashedSentence", {s: "Even_though the army surrendered, the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS20_ambig_unmodified",[54,1]], "DashedSentence", {s: "The store guaranteed the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS20_unambig_unmodified",[54,1]], "DashedSentence", {s: "The store guaranteed that the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler34",[55,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
[["filler34",[55,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ10_ambig_unmodified",[55,1]], "DashedSentence", {s: "Even_though the janitor vacuumed the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ10_unambig_unmodified",[55,1]], "DashedSentence", {s: "Even_though the janitor vacuumed, the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler9",[55,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
[["filler9",[55,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
[["filler44",[55,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
[["filler44",[55,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
did not find yes or no
[["NPS14_unambig_unmodified",[56,1]], "DashedSentence", {s: "The scientist proved that the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS14_ambig_unmodified",[56,1]], "DashedSentence", {s: "The scientist proved the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler24",[56,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
[["filler24",[56,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
[["filler36",[56,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
[["filler36",[56,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ2_ambig_unmodified",[56,1]], "DashedSentence", {s: "In_case the executive forgot the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ2_unambig_unmodified",[56,1]], "DashedSentence", {s: "In_case the executive forgot, the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler3",[57,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
[["filler3",[57,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
did not find yes or no
[["NPS11_ambig_unmodified",[57,1]], "DashedSentence", {s: "The coach discovered the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS11_unambig_unmodified",[57,1]], "DashedSentence", {s: "The coach discovered that the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler50",[57,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
[["filler50",[57,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
[["filler39",[57,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler39",[57,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler10",[58,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
[["filler10",[58,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
[["filler75",[58,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler75",[58,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler60",[58,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
[["filler60",[58,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
did not find yes or no
[["NPS2_ambig_unmodified",[58,1]], "DashedSentence", {s: "The mechanic accepted the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS2_unambig_unmodified",[58,1]], "DashedSentence", {s: "The mechanic accepted that the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ2_unambig_unmodified",[59,1]], "DashedSentence", {s: "In_case the executive forgot, the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ2_ambig_unmodified",[59,1]], "DashedSentence", {s: "In_case the executive forgot the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS10_ambig_unmodified",[59,1]], "DashedSentence", {s: "The umpire warned the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS10_unambig_unmodified",[59,1]], "DashedSentence", {s: "The umpire warned that the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS10_unambig_unmodified",[59,1]], "DashedSentence", {s: "The umpire warned that the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS10_ambig_unmodified",[59,1]], "DashedSentence", {s: "The umpire warned the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler48",[59,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
[["filler48",[59,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
[["filler62",[60,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
[["filler62",[60,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
[["filler76",[60,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler76",[60,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler29",[60,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
[["filler29",[60,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
[["filler51",[60,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler51",[60,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler76",[61,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler76",[61,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler62",[61,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
[["filler62",[61,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
[["filler51",[61,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler51",[61,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler29",[61,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
[["filler29",[61,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
did not find yes or no
[["NPS10_ambig_unmodified",[62,1]], "DashedSentence", {s: "The umpire warned the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS10_unambig_unmodified",[62,1]], "DashedSentence", {s: "The umpire warned that the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ2_unambig_unmodified",[62,1]], "DashedSentence", {s: "In_case the executive forgot, the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ2_ambig_unmodified",[62,1]], "DashedSentence", {s: "In_case the executive forgot the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler48",[62,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
[["filler48",[62,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
did not find yes or no
[["NPS10_unambig_unmodified",[62,1]], "DashedSentence", {s: "The umpire warned that the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS10_ambig_unmodified",[62,1]], "DashedSentence", {s: "The umpire warned the spectators would probably get too rowdy if beer was served."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler75",[63,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler75",[63,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler10",[63,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
[["filler10",[63,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
did not find yes or no
[["NPS2_ambig_unmodified",[63,1]], "DashedSentence", {s: "The mechanic accepted the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS2_unambig_unmodified",[63,1]], "DashedSentence", {s: "The mechanic accepted that the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler60",[63,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
[["filler60",[63,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
did not find yes or no
[["NPS11_ambig_unmodified",[64,1]], "DashedSentence", {s: "The coach discovered the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS11_unambig_unmodified",[64,1]], "DashedSentence", {s: "The coach discovered that the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler3",[64,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
[["filler3",[64,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
[["filler39",[64,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler39",[64,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler50",[64,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
[["filler50",[64,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
[["filler24",[65,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
[["filler24",[65,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
did not find yes or no
[["NPS14_unambig_unmodified",[65,1]], "DashedSentence", {s: "The scientist proved that the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS14_ambig_unmodified",[65,1]], "DashedSentence", {s: "The scientist proved the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ2_ambig_unmodified",[65,1]], "DashedSentence", {s: "In_case the executive forgot the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ2_unambig_unmodified",[65,1]], "DashedSentence", {s: "In_case the executive forgot, the assistant would remind him of his daily meetings and appointments."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler36",[65,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
[["filler36",[65,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ10_ambig_unmodified",[66,1]], "DashedSentence", {s: "Even_though the janitor vacuumed the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ10_unambig_unmodified",[66,1]], "DashedSentence", {s: "Even_though the janitor vacuumed, the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler34",[66,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
[["filler34",[66,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
[["filler44",[66,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
[["filler44",[66,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
[["filler9",[66,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
[["filler9",[66,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
[["filler20",[67,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
[["filler20",[67,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
[["filler9",[67,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
[["filler9",[67,1]], "DashedSentence", {s: "The patrolmen who were on the peak rescued the skier after giving up all hope of a happy ending."}, "Question", {q: "Was the skier killed?   ", hasCorrect: 1}],
did not find yes or no
[["NPS20_ambig_unmodified",[67,1]], "DashedSentence", {s: "The store guaranteed the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS20_unambig_unmodified",[67,1]], "DashedSentence", {s: "The store guaranteed that the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ15_ambig_unmodified",[67,1]], "DashedSentence", {s: "Even_though the army surrendered the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ15_unambig_unmodified",[67,1]], "DashedSentence", {s: "Even_though the army surrendered, the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler48",[68,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
[["filler48",[68,1]], "DashedSentence", {s: "Because the passenger missed the train he had to wait for the next one which was scheduled two hours later."}, "Question", {q: "Was the passenger on time?   ", hasCorrect: 1}],
[["filler43",[68,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
[["filler43",[68,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
[["filler53",[68,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler53",[68,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler28",[68,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
[["filler28",[68,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ1_ambig_unmodified",[69,1]], "DashedSentence", {s: "Even_though the band left the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ1_unambig_unmodified",[69,1]], "DashedSentence", {s: "Even_though the band left, the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler41",[69,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
[["filler41",[69,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
[["filler24",[69,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
[["filler24",[69,1]], "DashedSentence", {s: "Many of the customers at the restaurant became sick because the sushi delivered that morning wasn't very fresh."}, "Question", {q: "Did the customers get food poisoning?   ", hasCorrect: 0}],
[["filler15",[69,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler15",[69,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler73",[70,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
[["filler73",[70,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
[["filler1",[70,1]], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],
[["filler1",[70,1]], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],
did not find yes or no
[["NPS7_unambig_unmodified",[70,1]], "DashedSentence", {s: "The apprentice forgot that the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS7_ambig_unmodified",[70,1]], "DashedSentence", {s: "The apprentice forgot the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler52",[70,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
[["filler52",[70,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
[["filler18",[71,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
[["filler18",[71,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ18_unambig_unmodified",[71,1]], "DashedSentence", {s: "In_case the manager quit, the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ18_ambig_unmodified",[71,1]], "DashedSentence", {s: "In_case the manager quit the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler66",[71,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
[["filler66",[71,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ8_unambig_unmodified",[71,1]], "DashedSentence", {s: "After the mugger attacked, the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ8_ambig_unmodified",[71,1]], "DashedSentence", {s: "After the mugger attacked the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS12_unambig_unmodified",[72,1]], "DashedSentence", {s: "The woman noticed that the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS12_ambig_unmodified",[72,1]], "DashedSentence", {s: "The woman noticed the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler6",[72,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
[["filler6",[72,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ6_unambig_unmodified",[72,1]], "DashedSentence", {s: "As the couple danced, the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ6_ambig_unmodified",[72,1]], "DashedSentence", {s: "As the couple danced the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler49",[72,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
[["filler49",[72,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
[["filler25",[73,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
[["filler25",[73,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ8_unambig_unmodified",[73,1]], "DashedSentence", {s: "After the mugger attacked, the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ8_ambig_unmodified",[73,1]], "DashedSentence", {s: "After the mugger attacked the jogger was rubbing his sore leg, but it didn't help."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler35",[73,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
[["filler35",[73,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
did not find yes or no
[["NPS3_unambig_unmodified",[73,1]], "DashedSentence", {s: "The old_man recalled that the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS3_ambig_unmodified",[73,1]], "DashedSentence", {s: "The old_man recalled the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ3_unambig_unmodified",[74,1]], "DashedSentence", {s: "Although the maid cleaned, the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ3_ambig_unmodified",[74,1]], "DashedSentence", {s: "Although the maid cleaned the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler68",[74,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
[["filler68",[74,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
[["filler73",[74,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
[["filler73",[74,1]], "DashedSentence", {s: "The retailer estimated the price and made his offer accordingly."}, "Question", {q: "Was the retailer making a random offer?   ", hasCorrect: 1}],
[["filler30",[74,1]], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
[["filler30",[74,1]], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
[["filler66",[75,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
[["filler66",[75,1]], "DashedSentence", {s: "The teenager called his mother to tell her he was staying out late."}, "Question", {q: "Would the teenager be home for dinner?   ", hasCorrect: 1}],
[["filler37",[75,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
[["filler37",[75,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
did not find yes or no
[["NPS16_unambig_unmodified",[75,1]], "DashedSentence", {s: "The priest recognized that two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS16_ambig_unmodified",[75,1]], "DashedSentence", {s: "The priest recognized two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler5",[75,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
[["filler5",[75,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ20_ambig_unmodified",[76,1]], "DashedSentence", {s: "While the artist painted the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ20_unambig_unmodified",[76,1]], "DashedSentence", {s: "While the artist painted, the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS2_ambig_unmodified",[76,1]], "DashedSentence", {s: "The mechanic accepted the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS2_unambig_unmodified",[76,1]], "DashedSentence", {s: "The mechanic accepted that the car looked in worse shape than before he worked on it."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler78",[76,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler78",[76,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler4",[76,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
[["filler4",[76,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
[["filler77",[77,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
[["filler77",[77,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
[["filler54",[77,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler54",[77,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler21",[77,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
[["filler21",[77,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ10_unambig_unmodified",[77,1]], "DashedSentence", {s: "Even_though the janitor vacuumed, the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ10_ambig_unmodified",[77,1]], "DashedSentence", {s: "Even_though the janitor vacuumed the carpet was covered with dust and crumbs from the office party."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler26",[78,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
[["filler26",[78,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ14_ambig_unmodified",[78,1]], "DashedSentence", {s: "After the librarian called the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ14_unambig_unmodified",[78,1]], "DashedSentence", {s: "After the librarian called, the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS5_ambig_unmodified",[78,1]], "DashedSentence", {s: "The journalist confirmed the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS5_unambig_unmodified",[78,1]], "DashedSentence", {s: "The journalist confirmed that the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler43",[78,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
[["filler43",[78,1]], "DashedSentence", {s: "To ensure that the security guard watched the televisions the supervisor would not let him leave his desk even if he had to go to the bathroom."}, "Question", {q: "Was the guard confined to his desk while he worked?   ", hasCorrect: 0}],
[["filler79",[79,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler79",[79,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler39",[79,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler39",[79,1]], "DashedSentence", {s: "Some birds flew from the shadowy hill with the big pine tree into the sunlight while picnicking tourists looked on in wonder."}, "Question", {q: "Was the hill dark?   ", hasCorrect: 0}],
[["filler34",[79,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
[["filler34",[79,1]], "DashedSentence", {s: "All the strain of cycling and camping was enough to make the backpackers reconsider a return trip to the national park next year."}, "Question", {q: "Did the backpackers find the trails easy?   ", hasCorrect: 1}],
[["filler45",[79,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler45",[79,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler46",[80,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler46",[80,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler23",[80,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler23",[80,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler3",[80,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
[["filler3",[80,1]], "DashedSentence", {s: "The truck near the sidewalk hit the bicyclist after the driver failed to stop for a red light."}, "Question", {q: "Did the bicyclist collide with a pedestrian?   ", hasCorrect: 1}],
[["filler42",[80,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
[["filler42",[80,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
did not find yes or no
[["NPS9_ambig_unmodified",[81,1]], "DashedSentence", {s: "The army found the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS9_unambig_unmodified",[81,1]], "DashedSentence", {s: "The army found that the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler4",[81,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
[["filler4",[81,1]], "DashedSentence", {s: "The clerk at the store stabbed the new boss because he had forgotten to take his medication."}, "Question", {q: "Was the boss new?   ", hasCorrect: 0}],
[["filler57",[81,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
[["filler57",[81,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
did not find yes or no
[["NPS11_ambig_unmodified",[81,1]], "DashedSentence", {s: "The coach discovered the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS11_unambig_unmodified",[81,1]], "DashedSentence", {s: "The coach discovered that the player tried to show off all the time."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler53",[82,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler53",[82,1]], "DashedSentence", {s: "Though the elephant ate the peanuts, he did not perform the trick all the children were waiting for."}, "Question", {q: "Did the elephant like peanuts?   ", hasCorrect: 0}],
[["filler40",[82,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
[["filler40",[82,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ18_ambig_unmodified",[82,1]], "DashedSentence", {s: "In_case the manager quit the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ18_unambig_unmodified",[82,1]], "DashedSentence", {s: "In_case the manager quit, the company began training new staff in several departments."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler77",[82,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
[["filler77",[82,1]], "DashedSentence", {s: "The student realized the mistake as soon as he turned in his exam."}, "Question", {q: "Did the student answer everything correctly?   ", hasCorrect: 1}],
[["filler55",[83,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
[["filler55",[83,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
[["filler16",[83,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler16",[83,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler26",[83,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
[["filler26",[83,1]], "DashedSentence", {s: "The waitress at the diner decided to move to New York and pursue her dream to become a dancer."}, "Question", {q: "Did the waitress work at a diner?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ12_ambig_unmodified",[83,1]], "DashedSentence", {s: "Because the train stopped the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ12_unambig_unmodified",[83,1]], "DashedSentence", {s: "Because the train stopped, the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler17",[84,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
[["filler17",[84,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
[["filler14",[84,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler14",[84,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler41",[84,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
[["filler41",[84,1]], "DashedSentence", {s: "The loaves of bread were eaten in the banquet hall so that the guests would not dirty the carpet in the lobby."}, "Question", {q: "Was the bread served in the banquet hall to limit the mess?   ", hasCorrect: 0}],
[["filler72",[84,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
[["filler72",[84,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
[["filler70",[85,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
[["filler70",[85,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
did not find yes or no
[["NPS13_unambig_unmodified",[85,1]], "DashedSentence", {s: "The tourists saw that the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS13_ambig_unmodified",[85,1]], "DashedSentence", {s: "The tourists saw the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS14_ambig_unmodified",[85,1]], "DashedSentence", {s: "The scientist proved the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS14_unambig_unmodified",[85,1]], "DashedSentence", {s: "The scientist proved that the theory could help build cars with better mileage."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ16_unambig_unmodified",[85,1]], "DashedSentence", {s: "While the narrator read, the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ16_ambig_unmodified",[85,1]], "DashedSentence", {s: "While the narrator read the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS4_unambig_unmodified",[86,1]], "DashedSentence", {s: "The traveler heard that the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS4_ambig_unmodified",[86,1]], "DashedSentence", {s: "The traveler heard the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler65",[86,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
[["filler65",[86,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
[["filler7",[86,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
[["filler7",[86,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
[["filler54",[86,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler54",[86,1]], "DashedSentence", {s: "Because Emily watched a movie, her husband could not watch the football game."}, "Question", {q: "Was the TV set on?   ", hasCorrect: 0}],
[["filler21",[87,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
[["filler21",[87,1]], "DashedSentence", {s: "The seminar was incredibly boring for most of the students although the people in the front row seemed to enjoy themselves."}, "Question", {q: "Did a few people like the lecture?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ15_ambig_unmodified",[87,1]], "DashedSentence", {s: "Even_though the army surrendered the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ15_unambig_unmodified",[87,1]], "DashedSentence", {s: "Even_though the army surrendered, the territory was filled with land mines that still had to be cleared."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ19_unambig_unmodified",[87,1]], "DashedSentence", {s: "As the customer paid, the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ19_ambig_unmodified",[87,1]], "DashedSentence", {s: "As the customer paid the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS17_unambig_unmodified",[87,1]], "DashedSentence", {s: "The reporter revealed that the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS17_ambig_unmodified",[87,1]], "DashedSentence", {s: "The reporter revealed the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ11_unambig_unmodified",[88,1]], "DashedSentence", {s: "Although the candidates debated, the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ11_ambig_unmodified",[88,1]], "DashedSentence", {s: "Although the candidates debated the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler29",[88,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
[["filler29",[88,1]], "DashedSentence", {s: "The librarian noticed that a large number of very rare books were misplaced after the carpenters had completed their job."}, "Question", {q: "Did a student notice the misplaced books?", hasCorrect: 1}],
[["filler38",[88,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
[["filler38",[88,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
[["filler11",[88,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
[["filler11",[88,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
[["filler80",[89,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler80",[89,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler64",[89,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler64",[89,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler71",[89,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler71",[89,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler47",[89,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
[["filler47",[89,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
[["filler28",[90,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
[["filler28",[90,1]], "DashedSentence", {s: "The store clerk trusted the customer who said the toy she had purchased was broken."}, "Question", {q: "Did the store clerk think that the woman was lying about the toy?   ", hasCorrect: 1}],
did not find yes or no
[["NPS5_unambig_unmodified",[90,1]], "DashedSentence", {s: "The journalist confirmed that the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS5_ambig_unmodified",[90,1]], "DashedSentence", {s: "The journalist confirmed the story would be published on the front page the next day."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler14",[90,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler14",[90,1]], "DashedSentence", {s: "The rain flooded the car that had been abandoned next to a van down by the river."}, "Question", {q: "Was the car abandoned next to a truck?   ", hasCorrect: 1}],
[["filler8",[90,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
[["filler8",[90,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
did not find yes or no
[["NPS3_ambig_unmodified",[91,1]], "DashedSentence", {s: "The old_man recalled the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS3_unambig_unmodified",[91,1]], "DashedSentence", {s: "The old_man recalled that the nurse had complained to the doctor that the patient never took his medication."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler31",[91,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
[["filler31",[91,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
[["filler2",[91,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
[["filler2",[91,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
did not find yes or no
[["NPS8_ambig_unmodified",[91,1]], "DashedSentence", {s: "The committee mentioned the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS8_unambig_unmodified",[91,1]], "DashedSentence", {s: "The committee mentioned that the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler27",[92,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
[["filler27",[92,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ19_unambig_unmodified",[92,1]], "DashedSentence", {s: "As the customer paid, the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ19_ambig_unmodified",[92,1]], "DashedSentence", {s: "As the customer paid the waitress could see how large the tip was."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ20_ambig_unmodified",[92,1]], "DashedSentence", {s: "While the artist painted the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ20_unambig_unmodified",[92,1]], "DashedSentence", {s: "While the artist painted, the furniture was covered with white cloths to shield it from dust."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler55",[92,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
[["filler55",[92,1]], "DashedSentence", {s: "If Ann lost the bet, her boyfriend would get to pick the movie they go to."}, "Question", {q: "Would the boyfriend necessarily pick the movie?   ", hasCorrect: 1}],
[["filler67",[93,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
[["filler67",[93,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
[["filler51",[93,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler51",[93,1]], "DashedSentence", {s: "If the principal finished the survey he would present it in the PTA meeting."}, "Question", {q: "Was it one of the parents who was working on the survey?   ", hasCorrect: 1}],
[["filler25",[93,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
[["filler25",[93,1]], "DashedSentence", {s: "A cousin proved his social ineptness by making an insensitive joke at the funeral. "}, "Question", {q: "Was the cousin's comment appropriate?   ", hasCorrect: 1}],
[["filler69",[93,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
[["filler69",[93,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
did not find yes or no
[["NPS1_unambig_unmodified",[94,1]], "DashedSentence", {s: "The employees understood that the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS1_ambig_unmodified",[94,1]], "DashedSentence", {s: "The employees understood the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler12",[94,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
[["filler12",[94,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ7_unambig_unmodified",[94,1]], "DashedSentence", {s: "After the kids cheated, the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ7_ambig_unmodified",[94,1]], "DashedSentence", {s: "After the kids cheated the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler19",[94,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
[["filler19",[94,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
[["filler5",[95,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
[["filler5",[95,1]], "DashedSentence", {s: "The taxi at the airport picked_up the businessman while he was being paged by his wife."}, "Question", {q: "Was the businessman paged by his boss?   ", hasCorrect: 1}],
did not find yes or no
[["NPS17_ambig_unmodified",[95,1]], "DashedSentence", {s: "The reporter revealed the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS17_unambig_unmodified",[95,1]], "DashedSentence", {s: "The reporter revealed that the politician received some payments from the unscrupulous millionaire."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler31",[95,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
[["filler31",[95,1]], "DashedSentence", {s: "The television announcer angered many fans when he incorrectly reported that the popular sports hero had been traded to a rival team."}, "Question", {q: "Did the announcer claim that the sports hero retired?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ3_ambig_unmodified",[95,1]], "DashedSentence", {s: "Although the maid cleaned the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ3_unambig_unmodified",[95,1]], "DashedSentence", {s: "Although the maid cleaned, the house was still in a state of total chaos."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ4_ambig_unmodified",[96,1]], "DashedSentence", {s: "Because the class failed the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ4_unambig_unmodified",[96,1]], "DashedSentence", {s: "Because the class failed, the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler50",[96,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
[["filler50",[96,1]], "DashedSentence", {s: "While the athletes ran the track the obstacle course was undergoing massive renovations."}, "Question", {q: "Was the obstacle course being renovated?   ", hasCorrect: 0}],
did not find yes or no
[["NPS4_unambig_unmodified",[96,1]], "DashedSentence", {s: "The traveler heard that the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS4_ambig_unmodified",[96,1]], "DashedSentence", {s: "The traveler heard the clock had woken everybody up in the youth hostel."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler33",[96,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
[["filler33",[96,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
[["filler72",[97,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
[["filler72",[97,1]], "DashedSentence", {s: "The journalist doubted the validity of the statement that was released by the corporation."}, "Question", {q: "Did the journalist think the statement might not be true?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ17_unambig_unmodified",[97,1]], "DashedSentence", {s: "Before the tribe worshipped, the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ17_ambig_unmodified",[97,1]], "DashedSentence", {s: "Before the tribe worshipped the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler61",[97,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
[["filler61",[97,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
did not find yes or no
[["NPS19_unambig_unmodified",[97,1]], "DashedSentence", {s: "The lawyer established that the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS19_ambig_unmodified",[97,1]], "DashedSentence", {s: "The lawyer established the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler58",[98,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler58",[98,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler61",[98,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
[["filler61",[98,1]], "DashedSentence", {s: "The politician conveyed the plans he had for educational reform in detail and asked for support in implementing them."}, "Question", {q: "Was the politician vague about his educational reform plans?   ", hasCorrect: 1}],
did not find yes or no
[["NPS1_unambig_unmodified",[98,1]], "DashedSentence", {s: "The employees understood that the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS1_ambig_unmodified",[98,1]], "DashedSentence", {s: "The employees understood the contract would be changed very soon to accommodate all parties."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler74",[98,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
[["filler74",[98,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
[["filler38",[99,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
[["filler38",[99,1]], "DashedSentence", {s: "The logging road was sandy so the trucker kept in low gear to avoid spilling his precious cargo."}, "Question", {q: "Was the trucker going quickly?   ", hasCorrect: 1}],
[["filler13",[99,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
[["filler13",[99,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
[["filler59",[99,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler59",[99,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler10",[99,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
[["filler10",[99,1]], "DashedSentence", {s: "The convict stalked the judge who had put him in jail for over thirty years."}, "Question", {q: "Was the convict stalking the judge?   ", hasCorrect: 0}],
[["filler44",[100,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
[["filler44",[100,1]], "DashedSentence", {s: "After the contractor inspected the office, it was discovered that the light switch needed to be repaired."}, "Question", {q: "Did the outlets need to be replaced?   ", hasCorrect: 1}],
[["filler49",[100,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
[["filler49",[100,1]], "DashedSentence", {s: "Because the fugutive roamed the area the residents secured all their doors and windows."}, "Question", {q: "Was the fugutive nearby?   ", hasCorrect: 0}],
[["filler32",[100,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
[["filler32",[100,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ4_ambig_unmodified",[100,1]], "DashedSentence", {s: "Because the class failed the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ4_unambig_unmodified",[100,1]], "DashedSentence", {s: "Because the class failed, the exam was rewritten by the teacher so it was much easier."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ16_unambig_unmodified",[101,1]], "DashedSentence", {s: "While the narrator read, the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ16_ambig_unmodified",[101,1]], "DashedSentence", {s: "While the narrator read the story was dramatized by the troop of skilled actors."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ9_ambig_unmodified",[101,1]], "DashedSentence", {s: "Even_though the girl phoned the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ9_unambig_unmodified",[101,1]], "DashedSentence", {s: "Even_though the girl phoned, the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler16",[101,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler16",[101,1]], "DashedSentence", {s: "The math teacher quizzed a student who had been drawing pictures on the inside of his notebook instead of paying attention in class."}, "Question", {q: "Was the student paying attention?   ", hasCorrect: 1}],
[["filler75",[101,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler75",[101,1]], "DashedSentence", {s: "The student guessed the answer to the question and marked it on the sheet."}, "Question", {q: "Did the student skip the question?   ", hasCorrect: 1}],
[["filler59",[102,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler59",[102,1]], "DashedSentence", {s: "The speaker articulated the ideas in a very eloquent fashion."}, "Question", {q: "Was the speaker expressing himself clearly?   ", hasCorrect: 0}],
[["filler32",[102,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
[["filler32",[102,1]], "DashedSentence", {s: "The fox which had been stealing eggs from the chicken coop was trapped during the night and released in another part of the county."}, "Question", {q: "Had the fox been stealing eggs?   ", hasCorrect: 0}],
[["filler22",[102,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
[["filler22",[102,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
[["filler23",[102,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler23",[102,1]], "DashedSentence", {s: "The company party was more rowdy than usual since someone had spiked the punch."}, "Question", {q: "Was the party boring?   ", hasCorrect: 1}],
[["filler45",[103,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler45",[103,1]], "DashedSentence", {s: "Whenever the quiet stewardess addressed the cabin the drunken businessman listened attentively."}, "Question", {q: "Did the drunk ignore the stewardess?   ", hasCorrect: 1}],
[["filler8",[103,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
[["filler8",[103,1]], "DashedSentence", {s: "The exterminator killed the wasps while the child screamed at the top of his lungs."}, "Question", {q: "Did the child scream?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ5_unambig_unmodified",[103,1]], "DashedSentence", {s: "Once the child played, the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ5_ambig_unmodified",[103,1]], "DashedSentence", {s: "Once the child played the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler27",[103,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
[["filler27",[103,1]], "DashedSentence", {s: "The mutiny on the ship was squashed even though the officers were heavily outnumbered and far from a safe port."}, "Question", {q: "Did the officers have the advantage?   ", hasCorrect: 1}],
did not find yes or no
[["NPS15_unambig_unmodified",[104,1]], "DashedSentence", {s: "The soldiers remembered that the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS15_ambig_unmodified",[104,1]], "DashedSentence", {s: "The soldiers remembered the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS18_ambig_unmodified",[104,1]], "DashedSentence", {s: "The owners insured the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS18_unambig_unmodified",[104,1]], "DashedSentence", {s: "The owners insured that the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler67",[104,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
[["filler67",[104,1]], "DashedSentence", {s: "Mr. Rogers asked the question and was waiting for a reply."}, "Question", {q: "Did someone answer the question?   ", hasCorrect: 1}],
did not find yes or no
[["NPS6_ambig_unmodified",[104,1]], "DashedSentence", {s: "The worker maintained the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS6_unambig_unmodified",[104,1]], "DashedSentence", {s: "The worker maintained that the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler71",[105,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler71",[105,1]], "DashedSentence", {s: "The judge demanded the truth and threatened the witness with contempt if she did not reply to the question."}, "Question", {q: "Was the judge addressing the witness?   ", hasCorrect: 0}],
[["filler42",[105,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
[["filler42",[105,1]], "DashedSentence", {s: "While the seamstress sewed a dress the tailor went to the track to bet on the ponies."}, "Question", {q: "Did the tailor help make a dress?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ14_ambig_unmodified",[105,1]], "DashedSentence", {s: "After the librarian called the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ14_unambig_unmodified",[105,1]], "DashedSentence", {s: "After the librarian called, the intern began returning books to the shelves."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler17",[105,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
[["filler17",[105,1]], "DashedSentence", {s: "The owner of the coffeeshop hired a folk guitar singer who he had met in college and with whom he had fallen in love."}, "Question", {q: "Did the singer own the coffeeshop?   ", hasCorrect: 1}],
[["filler2",[106,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
[["filler2",[106,1]], "DashedSentence", {s: "The general who the colonel embarrassed tripped over someone's foot after drinking too much at the party."}, "Question", {q: "Did the general trip?   ", hasCorrect: 0}],
[["filler78",[106,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler78",[106,1]], "DashedSentence", {s: "The comedian remembered the joke and used it as an encore."}, "Question", {q: "Did the comedian forget the joke?   ", hasCorrect: 1}],
[["filler37",[106,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
[["filler37",[106,1]], "DashedSentence", {s: "Almost any mechanic can talk for hours about techniques he's discovered in auto repair."}, "Question", {q: "Do most mechanics discover new techniques?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ1_unambig_unmodified",[106,1]], "DashedSentence", {s: "Even_though the band left, the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ1_ambig_unmodified",[106,1]], "DashedSentence", {s: "Even_though the band left the party went on for at least another two hours."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ12_ambig_unmodified",[107,1]], "DashedSentence", {s: "Because the train stopped the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ12_unambig_unmodified",[107,1]], "DashedSentence", {s: "Because the train stopped, the traffic was rerouted through side streets for several hours."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler60",[107,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
[["filler60",[107,1]], "DashedSentence", {s: "The trainer noted the success of his team at the recent tournament."}, "Question", {q: "Was the team succesful?   ", hasCorrect: 0}],
[["filler58",[107,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler58",[107,1]], "DashedSentence", {s: "As soon as Terry entered the room, his sister complained about his appearance."}, "Question", {q: "Did Terry's sister like the way he looked?   ", hasCorrect: 1}],
[["filler18",[107,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
[["filler18",[107,1]], "DashedSentence", {s: "The elderly gentleman sold a painting that had been in his family for over six generations because he had fallen upon hard times. "}, "Question", {q: "Was the gentleman wealthy?   ", hasCorrect: 1}],
[["filler19",[108,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
[["filler19",[108,1]], "DashedSentence", {s: "A fly landed on the soup a customer was eating so the waitress threw the meal out."}, "Question", {q: "Was the customer eating soup?   ", hasCorrect: 0}],
[["filler15",[108,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler15",[108,1]], "DashedSentence", {s: "The exhibition offended the public who petitioned the mayor to withhold funding from the museum."}, "Question", {q: "Did the public dislike the artwork?   ", hasCorrect: 0}],
[["filler6",[108,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
[["filler6",[108,1]], "DashedSentence", {s: "The battleship fired at the patrol boat despite the fact that the vessel had offered to surrender."}, "Question", {q: "Was the patrol boat attacked by the battleship?   ", hasCorrect: 0}],
did not find yes or no
[["NPS9_unambig_unmodified",[108,1]], "DashedSentence", {s: "The army found that the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS9_ambig_unmodified",[108,1]], "DashedSentence", {s: "The army found the supplies saved many lives during the long conflict."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler69",[109,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
[["filler69",[109,1]], "DashedSentence", {s: "The valedictorian quoted the famous saying by John Kennedy in his graduation speech."}, "Question", {q: "Did the valedictorian quote John Kennedy?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ13_unambig_unmodified",[109,1]], "DashedSentence", {s: "In_case the team lost, the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ13_ambig_unmodified",[109,1]], "DashedSentence", {s: "In_case the team lost the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS18_unambig_unmodified",[109,1]], "DashedSentence", {s: "The owners insured that the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS18_ambig_unmodified",[109,1]], "DashedSentence", {s: "The owners insured the house would never get flooded again when it rained."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler13",[109,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
[["filler13",[109,1]], "DashedSentence", {s: "The medication didn't help the patient who hadn't had a good night's sleep in several months because of back pains."}, "Question", {q: "Was the pain keeping the patient awake?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ6_unambig_unmodified",[110,1]], "DashedSentence", {s: "As the couple danced, the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ6_ambig_unmodified",[110,1]], "DashedSentence", {s: "As the couple danced the tango began to be played by a live orchestra."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler11",[110,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
[["filler11",[110,1]], "DashedSentence", {s: "The hairdresser hired an assistant who had been recommended to him by his cousin."}, "Question", {q: "Did the hairdresser's mother recommend the assistant?   ", hasCorrect: 1}],
[["filler62",[110,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
[["filler62",[110,1]], "DashedSentence", {s: "The astronaut reported the findings from the latest mission to his colleagues."}, "Question", {q: "Did the astronaut refuse to share his findings with others?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ13_ambig_unmodified",[110,1]], "DashedSentence", {s: "In_case the team lost the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPZ13_unambig_unmodified",[110,1]], "DashedSentence", {s: "In_case the team lost, the tie-breaker was scheduled for the following week at the local park."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler63",[111,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
[["filler63",[111,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
did not find yes or no
[["NPS8_unambig_unmodified",[111,1]], "DashedSentence", {s: "The committee mentioned that the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPS8_ambig_unmodified",[111,1]], "DashedSentence", {s: "The committee mentioned the issue would cause a problem at the meeting."}, "Question", {q: " yes
", hasCorrect: 0}],
[["filler80",[111,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler80",[111,1]], "DashedSentence", {s: "The arbitrator understood the position of both sides and ruled in favor of the plaintiff."}, "Question", {q: "Did the arbitrator favor the plaintiff's position?", hasCorrect: 0}],
[["filler12",[111,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
[["filler12",[111,1]], "DashedSentence", {s: "The cowboy inspected the new pistol that he had recently bought in town."}, "Question", {q: "Did the cowboy buy a gun?   ", hasCorrect: 0}],
did not find yes or no
[["NPS6_ambig_unmodified",[112,1]], "DashedSentence", {s: "The worker maintained the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS6_unambig_unmodified",[112,1]], "DashedSentence", {s: "The worker maintained that the walls fell down in a heap before he arrived."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler35",[112,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
[["filler35",[112,1]], "DashedSentence", {s: "The gas tank was making ominous sounds after the long car ride."}, "Question", {q: "Was the gas tank emitting noise?   ", hasCorrect: 0}],
[["filler20",[112,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
[["filler20",[112,1]], "DashedSentence", {s: "The harpist was well liked by most of the musicians in the orchestra but decided to leave anyway."}, "Question", {q: "Was the harpist treated poorly by the rest of the orchestra?   ", hasCorrect: 1}],
[["filler56",[112,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
[["filler56",[112,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
[["filler22",[113,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
[["filler22",[113,1]], "DashedSentence", {s: "The vaccine that was developed in the top secret laboratory could not be used in the third world because of its high costs."}, "Question", {q: "Was the vaccine freely accessible?   ", hasCorrect: 1}],
did not find yes or no
[["NPS7_ambig_unmodified",[113,1]], "DashedSentence", {s: "The apprentice forgot the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS7_unambig_unmodified",[113,1]], "DashedSentence", {s: "The apprentice forgot that the bicycle was standing in the garage next to the car."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler70",[113,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
[["filler70",[113,1]], "DashedSentence", {s: "The witness narrated the events of that night as he remembered them."}, "Question", {q: "Was the witness telling his version of the events?   ", hasCorrect: 0}],
[["filler76",[113,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler76",[113,1]], "DashedSentence", {s: "The neighbor overheard the conversation but pretended not to have noticed anything."}, "Question", {q: "Did the neighbor hear what was spoken?   ", hasCorrect: 0}],
[["filler57",[114,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
[["filler57",[114,1]], "DashedSentence", {s: "Since the band cancelled the concert, the fans who had tickets were reimbursed."}, "Question", {q: "Did the fans get their money back?   ", hasCorrect: 0}],
[["filler74",[114,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
[["filler74",[114,1]], "DashedSentence", {s: "The dispatcher expected the package and told the driver to wait for it."}, "Question", {q: "Did the dispatcher think the package was about to arrive?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ9_unambig_unmodified",[114,1]], "DashedSentence", {s: "Even_though the girl phoned, the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ9_ambig_unmodified",[114,1]], "DashedSentence", {s: "Even_though the girl phoned the instructor was very upset with her for missing a lesson."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ17_unambig_unmodified",[114,1]], "DashedSentence", {s: "Before the tribe worshipped, the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ17_ambig_unmodified",[114,1]], "DashedSentence", {s: "Before the tribe worshipped the idol was placed on a large platform."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS20_unambig_unmodified",[115,1]], "DashedSentence", {s: "The store guaranteed that the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS20_ambig_unmodified",[115,1]], "DashedSentence", {s: "The store guaranteed the television would last for ten years without failing."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler52",[115,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
[["filler52",[115,1]], "DashedSentence", {s: "Although Brad knew the answer he did not have enough time to write it down."}, "Question", {q: "Did Brad write an answer to the question?   ", hasCorrect: 1}],
[["filler68",[115,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
[["filler68",[115,1]], "DashedSentence", {s: "The researcher cited the data from some earlier unpublished work on which he based his current hypothesis."}, "Question", {q: "Were the results published?   ", hasCorrect: 1}],
[["filler46",[115,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler46",[115,1]], "DashedSentence", {s: "Once her boyfriend went to the bathroom, a naval officer approached the girl at the bar."}, "Question", {q: "Was the girl dating someone?   ", hasCorrect: 0}],
[["filler36",[116,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
[["filler36",[116,1]], "DashedSentence", {s: "The name tag on the blouse of the guest speaker took attention away from the coffee stain underneath."}, "Question", {q: "Did the speaker spill tea on her blouse?   ", hasCorrect: 1}],
[["filler33",[116,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
[["filler33",[116,1]], "DashedSentence", {s: "The minister who stole millions of dollars from his congregation spent the money on large houses and extravagant cars."}, "Question", {q: "Did the minister steal a few thousand dollars?   ", hasCorrect: 1}],
did not find yes or no
[["NPS12_ambig_unmodified",[116,1]], "DashedSentence", {s: "The woman noticed the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS12_unambig_unmodified",[116,1]], "DashedSentence", {s: "The woman noticed that the flyer had the wrong address listed on the front."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler63",[116,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
[["filler63",[116,1]], "DashedSentence", {s: "Ms. Taylor sang the ballad with a passion that moved everyone in the audience."}, "Question", {q: "Did Ms. Taylor deliver a moving performance?   ", hasCorrect: 0}],
did not find yes or no
[["NPZ7_ambig_unmodified",[117,1]], "DashedSentence", {s: "After the kids cheated the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ7_unambig_unmodified",[117,1]], "DashedSentence", {s: "After the kids cheated, the teacher had them sit at separate desks and think about what they had done."}, "Question", {q: " yes
", hasCorrect: 0}],
did not find yes or no
[["NPZ5_ambig_unmodified",[117,1]], "DashedSentence", {s: "Once the child played the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPZ5_unambig_unmodified",[117,1]], "DashedSentence", {s: "Once the child played, the piano was moved to the corner of the room."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler40",[117,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
[["filler40",[117,1]], "DashedSentence", {s: "The courageous fireman plummeted six stories but landed in a safety net and only suffered a few broken bones and a bruised ego."}, "Question", {q: "Was the fire fighter a coward?   ", hasCorrect: 1}],
[["filler64",[117,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler64",[117,1]], "DashedSentence", {s: "The missionary chanted the prayer together with his fellow worshipers."}, "Question", {q: "Was the missionary praying by himself?   ", hasCorrect: 1}],
[["filler47",[118,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
[["filler47",[118,1]], "DashedSentence", {s: "While the boys played hide and seek the parents went to take a nap."}, "Question", {q: "Were the boys awake?   ", hasCorrect: 0}],
[["filler7",[118,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
[["filler7",[118,1]], "DashedSentence", {s: "The player insulted the coach although the attack was unprovoked."}, "Question", {q: "Did the coach punch the player?   ", hasCorrect: 1}],
did not find yes or no
[["NPS13_ambig_unmodified",[118,1]], "DashedSentence", {s: "The tourists saw the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS13_unambig_unmodified",[118,1]], "DashedSentence", {s: "The tourists saw that the palace was being restored to its original condition."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPS15_ambig_unmodified",[118,1]], "DashedSentence", {s: "The soldiers remembered the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS15_unambig_unmodified",[118,1]], "DashedSentence", {s: "The soldiers remembered that the town had been flattened in the bombing raid."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler56",[119,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
[["filler56",[119,1]], "DashedSentence", {s: "Although the host forgot the cookies, there were plenty of other desserts for the guests to pick from."}, "Question", {q: "Were cookies served to the guests?   ", hasCorrect: 1}],
did not find yes or no
[["NPS16_unambig_unmodified",[119,1]], "DashedSentence", {s: "The priest recognized that two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 1}],
did not find yes or no
[["NPS16_ambig_unmodified",[119,1]], "DashedSentence", {s: "The priest recognized two guests were necessary for the marriage to be legal."}, "Question", {q: " no
", hasCorrect: 1}],
[["filler79",[119,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler79",[119,1]], "DashedSentence", {s: "The teacher sensed the mood of the children and turned to a different activity."}, "Question", {q: "Did the teacher continue with the same activity?   ", hasCorrect: 1}],
[["filler65",[119,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
[["filler65",[119,1]], "DashedSentence", {s: "The wizard howled the secret call and the rain began to pour just a few minutes afterwards."}, "Question", {q: "Did it start raining?   ", hasCorrect: 0}],
did not find yes or no
[["NPS19_ambig_unmodified",[120,1]], "DashedSentence", {s: "The lawyer established the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 0}],
did not find yes or no
[["NPS19_unambig_unmodified",[120,1]], "DashedSentence", {s: "The lawyer established that the alibi was not sufficient to free the defendant from blame."}, "Question", {q: " no
", hasCorrect: 0}],
[["filler30",[120,1]], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
[["filler30",[120,1]], "DashedSentence", {s: "The inspector fined the movie theater because it had a poorly lit exit sign which could be very dangerous if the customers needed to be evacuated quickly."}, "Question", {q: "Was the theater fined for its poor ventilation?   ", hasCorrect: 1}],
did not find yes or no
[["NPZ11_ambig_unmodified",[120,1]], "DashedSentence", {s: "Although the candidates debated the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 1}],
did not find yes or no
[["NPZ11_unambig_unmodified",[120,1]], "DashedSentence", {s: "Although the candidates debated, the issues were overlooked by most of the media who covered the campaign."}, "Question", {q: " yes
", hasCorrect: 1}],
[["filler1",[120,1]], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],
[["filler1",[120,1]], "DashedSentence", {s: "The graduate student who the professor from the university respected trained the researcher."}, "Question", {q: "Did the professor work at a university?   ", hasCorrect: 0}],


["participant_observations", "Form", {html: {include: "participant_observations.html"}}],
["end_of_experiment", "Form", {html: {include: "end_of_exp.html"}}]



];
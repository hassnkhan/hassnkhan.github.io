--- 
title: Uncertainty, forecasting, and technology roadmaps
categories:
  - Blog
tags:
  - institutions
  - science
--- 

We have all spent the better part of this summer obsessing over the shape and direction of infection curves. If there’s anything we’ve learned from our collective crash-course in epidemiology, it’s that the exercise of forecasting the future is quite hard. The models we’re building aren’t imbued with foresight no matter how complex (or, uh, simple) their underlying dynamics.

I will return to a more general discussion of forecasting and how institutional pressures influence the exercise at the end of this piece. I will first examine in more detail perhaps the most famous of contemporary forecasts: Moore’s Law. The simplified story is that we went from building-sized mainframes with lilliputian capabilities to carrying supercomputers in our pockets and it was made possible principally by the ongoing exponential increases in integration, a trend foreseen most elegantly by Gordon Moore. The apparent enduring accuracy of Moore’s projections has underpinned significant commentary about the technological possibilities of our future, I think in asking ourselves what the future holds we should examine more deeply what we’re using to predict the future.

This post will end up being lengthy so I’ll divide it into a few sections. First, I’ll explore in more detail the history and context in which Moore made his forecasts both in 1965 and later in 1975. Next, I’ll discuss the how institutions evolved to extend and refresh those forecasts to create a self-fulfilling prophecy. Lastly, I’ll discuss a bit about how those forecasts erred and engage in a broader discussion around the politics of forecasting. Given the importance of semiconductor technology to the last 40 years of technological progress, there is an already deep scholarship on the subject matter, which I’ll borrow from readily, but my intent is to explore not just how projections are shaped by and shape our actions but also how “wrongness” can be corrected and what that says about the nature of technology.

It’s worth beginning with some context for Moore’s original projection [^1]. With the benefit of hindsight the dominance of the integrated circuit is deemed a natural evolution of transistor technology. However, the future of computing technology was far less certain in the early 1960s. Although transistor technology was evolving rapidly from the humble beginnings of Bell Labs’ point-contact transistor[^2], the industry faced real reliability hurdles to large scale integration as circuits grew more complex. Jack Morton, Bell Labs’ research director, dubbed this the ‘tyranny of numbers’ and the industry, with significant support from DoD, was simultaneously developing a slew of technological approaches to addressing the problem in the early 1960s [^3]. Different approaches included modular packaging (favored by Motorola and the Army), thin films and hybrid circuits (Corning, RCA, and the Navy), molecular electronics (Westinghouse and Air Force), and monolithic integrated circuits (TI and Fairchild were the inventors). As cited in Holbrook (see FN 3), only 25% of firms indicated they were pursuing monolithic (i.e. integrated circuits) approaches in a 1962 survey in *Electronics Industries,* by contrast both modular packaging and thin-film approaches had >50% support.  

At the same time as industry researchers were approaching a variety of approaches to integration, there was a growing chorus of voices claiming that the existing scientific paradigm of solid-state devices was ultimately a dead-end. Researchers argued that the ultimate fabrication limit of transistor devices was only an order of magnitude away as early as the late 1950s and the same J.A. Morton from above actually advocated for a radically different approach to computing in place of increasingly complex integration: functional devices designed around new physical phenomena [^4]. Although outside the scope of this discussion, there’s a fascinating history to this line of research [^5].

Nor was Gordon Moore the only technology executive who thought there was a bright future to integrated circuit technology. An IEEE Spectrum conference hosted in 1964 featured several prominent executives all arguing that integrated circuit production techniques (here, using the term broadly to encompass the above) would offer advantages over discrete transistors in capability, yield and price.

Harry Knowles, a manager from the infamous Molecular Electronics Division at Westinghouse wrote the following (emphasis mine),

> During 1964, a saturated logic time in the 10- nanosecond range will probably be achieved—and per­haps even a lower value. **Speed has doubled every year over the past seven years on the average. Greater speeds depend upon mechanical tolerances. If transistors, diodes, resistors, etc., can be made smaller, the use of smaller parasitic capacitances implied thereby means that the speed of the circuits will be increased.**   
> …  
> **Masking tolerances are now in the 7- to 8-micron range, with a 15-ns saturated logic. We can soon expect 3- to 4-micron tolerances and 5- to 7-ns saturated logic. Electron-beam sensing and machining will permit 0.1- micron tolerances and subnanosecond logic speeds.**   
> Parenthetically, it is interesting to extrapolate on what a one-inch silicon slice would produce if the size of in­dividual components were decreased by a factor of 15. Figure 22 shows an integrated circuit which may be fabricated on a silicon wafer at a density of about 800 gates per square inch, using 8-micron tolerances. **If these tolerances were reduced to 0.5 micron, the area of the circuits would be reduced by slightly over 200. The number of circuits per square inch would then be about 16m000. In addition, the gates would operate 15 times faster or in the 1-ns delay range. Such a wafer would have a logic power about 100 times greater than today’s largest computer!**   

Knowles explicitly drew the link between continued miniaturization enabling higher performance (speed) and reliability and ultimately greater computing capacity. Knowles also included a graph that plotted the cost of an integrated circuit as a function of complexity [^6]. Notably, yield drops precipitously as complexity increases, creating a U-shape with a sweet spot for price/# of pins at the frontier of current technological capabilities. Keep this graph in mind.

![](2020-09-25-Uncertainy-forecasting-and-Roadmaps/2F426395-D0A1-4222-8FA1-7DB645FD2579.png)

Moore published the first iteration of his eponymous Law in 1965 in *Electronics* magazine. Given the context above, I have always felt the best way to understand Moore’s 1965 piece is as an advertisement to technology executives about why they should choose integrated circuits [^7]. The readership of Electronics would include executives, technologists, and government officials who were trying to understand which technologies to bet on for future projects and Gordon Moore as the co-founder of Fairchild Semiconductor wanted to sell them integrated circuit technology. 

There are a few choice hints to this motivation in the piece itself. Moore used language that served to re-assure executives tasked with deciding what technology to build their newest offering with. He noted that “Integrated electronics is established today” and “In almost every case, integrated electronics have demonstrated high reliability.” He then continued, “For most applications, semiconductor integrated circuits will predominate.” Moore’s message was clear: what seems like a risky bet on a novel technology is not actually one at all, you’re just the vanguard inventing the future.

The marketing angle aside, the piece’s enduring legacy comes from Moore’s projections and his forecasts both built on the optimism of Knowles et al and directly responded to those in the community who felt the runway for the silicon integrated circuit paradigm was short. Moore extended Knowles’ analysis in a few ways. First, he presents the data in cost per component and total components per circuit. Second, and most importantly, he demonstrates how the curves might shift over the coming decade, showing a continual improvement in the cost/complexity minima. His extension illustrates the dynamic, evolving nature of the industry’s technological capabilities. If you’re a computing executive his message is that by the close of the decade you’ll be able to build an IC with 1000 components for the same price as one with 100 components in 1965.

Moore explicitly 

Fast forward 10 years

- - - -
[^1]: My abridged discussion will borrow heavily from some of my own unpublished work and “Understanding Moore’s Law” by David Brock, which I recommend as further reading.
[^2]: A few recommended reads:
[^3]: Holbrook, 1995 
[^4]: Early pieces on impending limits: . Morton’s piece…
[^5]:
[^6]: Chapter 3 of Understanding Moore’s Law gives more history on miniaturzation in the computing and semiconductor history.
[^7]: Moore uses the term “integrated electronics” and explicitly mentions several different approaches to integration, “Several approaches evolved, including microassembly techniques for individual components, thin- film structures and semiconductor integrated circuits.”
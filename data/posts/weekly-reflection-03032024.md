---
title: 'Design Analysis of Dynamic Form'
date: '2024-03-03'
tags: ['SW Design']
draft: false
summary: 'Motivations and solutions'
---
I'm currently working on a digitalization proejct in a traditional medical care company. Our main focus now is building a digital
interface for the sales team working closely to our customers. They need to collect all kinds of measurement data from the customer, as
well as product configuration input based on the physical condition of the customer. 
This could usually contain 10 pages of fields for a single product category and for each page there are often 20 to 30 fields.
However, depending on the actual selected product type, not all fields are necesary, and some some fields have different rules
under different product context. In order to ease the work of our sales team, all there difference should be also reflected in
the interface. At the beginning I implemented a simple rule engine to handle all these business rules, and it worked pretty well.
However, as the projects, especially when more and more requirements come, we have meet some difficulties of keeping the codebase
clean and the maintainance is getting more and more difficult.

I was wondering if there is a existing open source project that has already a mature solution however, as I found out,
there is not really a product that can fullfill all the requirements:
1. The creation of a page as well as the fields should be able to be achieved through some inituitive and effective interface, so
   that they can be directly updated/changed by business related manager/administrator.
2. A relatively complex field rule system:
  2.1 Sometimes the value of a field should be cleared by hiding and in some other cases it should be kept. 
  2.2 For a given field with specific key, there could be for eacht product context a different value or only one value for all
      product contexts.
  2.3 Besides some basic rules such as "isVisible", "required" or "defaultValue", some extra rules are expected for certain types
      of input. For example, a number field could have a "value" property which allows its value to be mapped from other fields,
      or a "hiddenOptions" property by radio group can control the visibility of each select option by certain logic.
3. Multiple steps(pages) are required for the data collection and a field of a certain key, let's say "field-a" can appear in
   different step(page) by different product context. If "field-a" is a unqiue field, then it's necessary to keep the value
   synchronized across different steps, otherwise it will record a value for each product context.

During my research, there are two products that really impressed me: Tally and Feathery.

Tally has a UI very similar to Notion and they completely get rid of the way of drag&drop, which in my opinion improves quite
a lot effiency, however, the editing of computational field is not very inituative and it does not support much logic operations.

Feathery has a common drag&drop UI and has a more detailed style design UI as well as a more powerful rule system.

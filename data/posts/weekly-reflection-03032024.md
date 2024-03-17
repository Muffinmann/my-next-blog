---
title: 'Design Analysis of Dynamic Form'
date: '2024-03-03'
tags: ['SW Design']
draft: false
summary: 'Motivations and solutions'
---
I'm currently working on a digitalization project in a traditional medical care company. Our main focus now is building a digital
interface for the sales team, who work closely with our customers. They need to collect all kinds of measurement data from the customer,
as well as product configuration input based on the customer's physical condition. 

This typically involves 10 pages of fields for a single product category, with each page containing 20 to 30 fields.
However, depending on the selected product type, not all fields are necessary, and some some fields have different rules
under different product context. To ease the work of our sales team, these differences should also be reflected in
the interface. This introduce a lot of complexity by building the forms and I start to wonder if there is an existing 
project that already has a mature solution. But I haven't found one that fully meets all the requirements:

1. The creation of a page as well as the fields should be able to be achieved through some intuitive and effective interface, so
   that they can be directly updated/changed by business related manager/administrator.
2. A relatively complex field rule system:
  2.1 Sometimes the value of a field should be cleared by hiding and in some other cases it should be kept. 
  2.2 For a given field with specific key, there could be for each product context a different value or only one value for all
      product contexts.
  2.3 Besides some basic rules such as "isVisible", "required" or "defaultValue", some extra rules are expected for certain types
      of input. For example, a number field could have a "value" property which allows its value to be mapped from other fields,
      or a "hiddenOptions" property by radio group can control the visibility of each select option by certain logic.
3. Multiple steps(pages) are required for the data collection and a field of a certain key, let's say "field-a" can appear in
   different step(page) by different product context. If "field-a" is a unique field, then it's necessary to keep the value
   synchronized across different steps, otherwise it will record a value for each product context.

During my research, there are two products that really impressed me: Tally and Feathery.

Tally has a UI very similar to Notion and they completely get rid of the way of drag&drop, which in my opinion improves quite
a lot efficiency, however, the editing of computational field is not very initiative and it does not support much logic operations.
They have made a great innovation by form builder but they haven't used out all the power of command based
interface. In my eyes, anything that can be seen is describable, anything that can be described is definable. A form can also be 
described in a structural way.

Feathery has a common drag&drop UI and more detailed style design implemented in own canvas, and they also offer a good rule system.
The rule system is somehow powerful but it's too slow to edit if user has massive and complex rules.

Since my form builder aims at enterprise users, a fancy UI is not expected, instead it should be rather simple and comfortable. The
focus on efficiency leads to a text based interface which brings also other benefits such as friendly version control. A Vim style
editor is preferred since its advantage in batch editing. However, there should also be a good completion tool to smoothen the learning
curve of the editor itself as well as the format of the form builder. A good design example is the TailwindCss Intellisense in VSCode.


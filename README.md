# Marseille_homicides
This is a project for LEDE at Columbia: Analyzing data for gang related homicides in Marseille since 2023
Marseille Storytelling Project 🌇

Overview

This project explores the geography of homicides in Marseille between 2023 and 2025, combining crime statistics, spatial data, and scrollytelling to offer a nuanced narrative. It was built using Mapbox, QGIS, and Jupyter Notebook, and is presented as an interactive web experience.

🌍 Tools Used

QGIS: for geospatial preprocessing, neighborhood classification, and verifying crime locations

Jupyter Notebook (Pandas, GeoPandas): data cleaning, merging coordinates, jittering overlapping points

Mapbox Studio: building interactive maps, creating layers by year/type, managing styling and transitions

VS Code + Scrollama: adapting a template (https://github.com/mapbox/storytelling) HTML + JS storytelling framework

Datawrapper for Charts before AI

Adobe Illustrator: minor visual corrections of exported layers

AI (Chat GPT) to get Date out of Text (extracting Date and Place ('Ort')

🏛️ Data Sources

Wikipedia lists of homicides in Marseille (2023–2025), well documented https://fr.wikipedia.org/wiki/Liste_de_r%C3%A8glements_de_comptes_%C3%A0_Marseille_et_sa_r%C3%A9gion#cite_note-25

French government datasets:

Quartiers prioritaires (QPV)

https://www.data.gouv.fr/datasets/zones-urbaines-sensibles-zus-dans-le-departement-des-bouches-du-rhone/

Arrondissements shapefiles

Official homicide stats (INSEE / Police Préfectorale)

https://www.data.gouv.fr/datasets/bases-statistiques-communale-departementale-et-regionale-de-la-delinquance-enregistree-par-la-police-et-la-gendarmerie-nationales/

Marseille Tourism: https://www.marseille-tourisme.com/en/press/toolbox/press-releases-and-press-kits/press-releases/

Natural Earth dataset for country outlines (used for France outline)

⚖️ Process Highlights

Data Extraction & Structuring

Scraped and manually cleaned ~75 homicide entries

AI-promt analysing text to extract a date and a place

Parsed date and locations using regex in Jupyter

Mapped each incident to its neighborhood / arrondissement / QPV status

Spatial Preparation

Created two main spatial datasets:

morde.geojson: all cases with coords + year label

quartiers.geojson: sensitive neighborhoods

Used jittering to visually separate overlapping homicides on identical coordinates

Added tourist spots and beaches as custom Point layers

Story Map Design (Mapbox)

Custom style and base map

16+ custom layers:

3 separate homicide layers (2023/2024/2025)

jittered layer for early chapters

sensitive zones (QPV), arrondissements (north/south), boundaries

tourist zones: Notre-Dame, Cours-Julien, Vieux-Port, Plages

Designed all layers to be controlled by onChapterEnter logic in Scrollama config

Created a designplan: Font / Colors 

Code Setup

config.js: contains all camera transitions and layer visibility

index.html: uses Mapbox GL JS and Scrollama for scrollytelling

Styling and layout customized with Google Fonts (Space Grotesk), rounded text boxes, and dark theme

🎡 Narrative Structure

Intro: Bouches-du-Rhône context

Zoom-in: Marseille city and filled city border

Tourist perspective: three POIs shown with heart symbols

Contrast: southern arrondissements vs Quartiers Nord

Crime Focus: temporal breakdown of homicides per year

🔍 Key Challenges

Cleaning noisy location data with varying formats

Aligning homicide points with accurate Arrondissements and Quartiers boundaries

Making layers appear only when needed without reloading

Ensuring performance across map zoom/pan transitions

Storytelling (kill your darlings)

Design: I am limited in Illustrator and JS - for example I would have loved to include arrows.

🚀 What's Next

Add hover/click popups to reveal incident descriptions

Integrate full statistical comparisons between neighborhoods

Include the whole dataset from 1984

Better Storytelling: From the dataset to the one story, why the year 2023 was exceptionally «The war between DZ Mafia and Yoda»

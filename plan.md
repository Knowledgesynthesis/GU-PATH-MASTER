# **GU PATH MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A **mobile-first**, **dark-mode**, **offline-ready**, pathology-resident–level educational platform covering **Genitourinary (GU) Pathology** exactly as taught on a **GU pathology rotation** or in standard GU pathology textbooks (e.g., WHO Classifications, AFIP Fascicles, Bostwick/Schellhammer — conceptual only).

This app must teach:
- Prostate pathology (benign → atypical → carcinoma)  
- Bladder & urothelial tract pathology  
- Kidney tumors & medical kidney (biopsy-level patterns)  
- Testis & paratesticular lesions  
- Penis, urethra pathology  
- IHC markers & molecular concepts (conceptual only)  
- Structured differential frameworks  
- Common pitfalls & mimics  
- Synthetic case integration  
- **No real photomicrographs — icons/schematics only**  
- **No user tracking — session-only assessments**

---

# **MASTER PROMPT — GU Path Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**
You are a combined expert team:
- Product Manager  
- Senior Engineer  
- Instructional Designer  
- GU Pathology SME  
- Molecular/IHC SME  
- QA Specialist  
- UX Writer  

**Mission:**  
Build a complete GU pathology education ecosystem for pathology residents, focusing on **patterns**, **structured reasoning**, **differential frameworks**, and **synthetic case interpretation**.

---

# **1. INPUTS (To Fill When Running This Prompt)**

- **PRIMARY TOPICS:** {{TOPICS}}  
  Default: prostate, bladder/urothelium, kidney (tumors + medical), testis, paratesticular, penis, IHC, molecular frameworks.

- **LEVELS:** {{LEVELS}}  
  Default: PGY1–PGY4 pathology residents; GU fellows.

- **CONTEXT:** {{CONTEXT}}  
  Default: Surgical pathology rotation with GU emphasis; GU biopsy signout.

- **LEARNING OBJECTIVES:** {{LEARNING_OBJECTIVES}}  
  Examples:  
  - Interpret prostate biopsies & assign structured impressions (conceptually).  
  - Recognize urothelial atypia vs carcinoma in situ.  
  - Identify kidney tumor patterns and high-yield IHC.  
  - Interpret testicular tumor patterns and germ cell tumor groupings.  
  - Identify pitfalls in GU pathology (e.g., mimics of prostate cancer, urothelial CIS vs reactive).  
  - Understand basic molecular correlates (concept-only).  

- **CONSTRAINTS:** {{CONSTRAINTS}}  
  Must include:  
  - Dark-mode-first  
  - Offline-ready  
  - Mobile-first  
  - 100% synthetic diagrams  
  - No PHI, no patient-specific data  
  - No score or module tracking  

- **REFERENCES:** {{REFERENCES}}  
  Optional conceptual alignment with WHO GU tumor classifications.

- **VOICE:** {{VOICE_TONE}}  
  Default: Structured, pattern-focused, senior-resident teaching style.

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Teach residents how to interpret GU pathology in a structured, pattern-based way, covering biopsies, resections, tumors, inflammatory patterns, and IHC/molecular correlations.

**Name Options:**  
- **GU Path Master**  
- **UroPath Atlas**  
- **GenitoDx Studio** — “Patterns → Immunophenotype → Differential.”

**Success Criteria:**  
- Users recognize high-yield GU pathology patterns.  
- Learners interpret prostate biopsies conceptually and safely.  
- Residents differentiate urothelial reactive atypia vs CIS.  
- Trainees classify kidney tumors using architecture + IHC + molecular concepts.  
- Users integrate morphology + IHC + molecular in synthetic cases.

---

# **3. PERSONAS & USE CASES**

### PERSONAS
**PGY-1/2 Resident:**  
Needs: Intro to prostate patterns, bladder CIS basics.  
Pain: GU biopsies feel overwhelming.

**PGY-3/4 Resident:**  
Needs: Tumor classification + structured reporting.  
Pain: Prostate cancer mimics; CIS vs reactive.

**GU Path Fellow:**  
Needs: High-level frameworks & rare entities.  
Pain: Subtle molecular patterns & edge-case lesions.

### USE CASES
- “Is this prostate cancer or a mimic?”  
- “Is this urothelial atypia or CIS?”  
- “Which RCC subtype does this architecture fit?”  
- “Is this seminoma vs embryonal carcinoma?”  
- “Which IHC markers conceptually support the differential?”  
- “What does this biomarker pattern imply for classification (not treatment)?”  

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH**

## MODULE A — Normal GU Histology (Icon-based)
- Prostate acini & basal cells  
- Urothelium layers  
- Kidney glomeruli, tubules, interstitium  
- Seminiferous tubules  
- Penile squamous epithelium  

---

## MODULE B — Prostate Pathology (Core Module)
### Benign Conditions
- Nodular hyperplasia (BPH)  
- Atrophy (simple, post-atrophic, partial)  
- Atypical adenomatous hyperplasia (AAH)

### Mimics of Carcinoma
- PIN-like lesions  
- Adenosis  
- Basal cell hyperplasia  
- Cowper’s glands  
- Cribriform mimics

### Cancer (Conceptual Patterns)
- Gleason pattern architecture cartoons  
- Small acinar adenocarcinoma  
- Cribriform carcinoma  
- Intraductal carcinoma (IDC-P conceptual)  
- Perineural invasion cartoon  

### Biomarkers (Conceptual)
- Basal markers (p63, HMWK)  
- Alpha-methylacyl-CoA racemase (AMACR)  
- Pitfalls: patchy staining, mimics

---

## MODULE C — Bladder & Urothelium
### Reactive vs Neoplastic
- Reactive atypia  
- Flat CIS (high-yield cartoon clues)  
- Papillary lesions:
  - Papilloma  
  - PUNLMP (conceptual)  
  - Papillary urothelial carcinoma low-grade vs high-grade  
  - Inverted lesions  

### Variant Histologies (High-Level)
- Micropapillary  
- Nested  
- Plasmacytoid  
- Sarcomatoid  

### IHC (Concept-only)
- GATA3, p40, CK20 patterns  
- CIS vs reactive patterns  

---

## MODULE D — Kidney Tumors
### Clear cell RCC  
- Clear cytoplasm  
- Delicate vasculature schematic  

### Papillary RCC (types 1 & 2 conceptual)  
### Chromophobe RCC  
- Plant cell-like borders  
- Hale’s colloidal iron concept  

### Oncocytoma  
- Eosinophilic cells, central scar cartoon  

### Collecting duct carcinoma (high-level)  
### Translocation RCC (TFE3, TFEB concepts)  

### High-Yield IHC/Molecular (Conceptual)
- CK7 patterns  
- AMACR in papillary RCC  
- c-KIT in chromophobe/oncocytoma  
- TFE3 fusion concept

---

## MODULE E — Medical Kidney (Biopsy-Level Patterns - High-Level)
- Glomerular injury patterns (minimal change, FSGS schematic, membranous cartoon)  
- Tubulointerstitial nephritis  
- Acute tubular injury  
- Vascular lesions (thrombotic microangiopathy cartoon)  

*(All handled conceptually; not a nephrology management resource.)*

---

## MODULE F — Testis & Paratesticular Pathology
### Germ Cell Tumors
- Seminoma  
- Embryonal carcinoma  
- Yolk sac tumor (Schiller-Duval cartoon)  
- Choriocarcinoma  
- Teratoma  
- Mixed tumors  

### Sex Cord–Stromal Tumors  
- Leydig cell  
- Sertoli cell patterns  

### Paratesticular Lesions  
- Epididymal tumors  
- Paratesticular soft tissue lesions  

### IHC (Conceptual)
- PLAP, OCT3/4, SALL4, CD117  
- Glypican-3 for yolk sac  
- HCG (choriocarcinoma)

---

## MODULE G — Penis & Urethra
### Squamous lesions
- HPV-associated patterns  
- Penile intraepithelial neoplasia  
- Squamous cell carcinoma variants  

### Urethral lesions (high-level)

---

## MODULE H — Molecular & IHC Frameworks (Conceptual)
- Prostate: TMPRSS2–ERG (conceptual)  
- RCC: VHL pathway (high-level)  
- Urothelial carcinoma molecular concept buckets  
- Germ cell tumors: isoenzyme concepts, 12p gain cartoon  
- Marker panels for differential diagnosis  

---

## MODULE I — Pitfalls & Mimics
- Prostate cancer vs atrophy/AAH  
- Urothelium CIS vs reactive  
- Clear cell RCC vs clear cell mimics  
- Chromophobe vs oncocytoma  
- Seminoma vs embryonal carcinoma  
- Yolk sac patterns mimicking others  
- Spindle cell lesions mimicking sarcoma variants  

---

## MODULE J — Integrated GU Path Case Bank
Synthetic, multi-modality cases:
- Prostate core biopsies  
- TURBT cases (bladder)  
- Nephrectomy cases  
- Medical kidney biopsies  
- Testicular mass workups  
- Penile/urethral biopsies  
- IHC/molecular synthetic interpretation  
- Classic mimic traps  

---

# **5. INTERACTIVE MODELS**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails |
|------------|----------|--------|----------|---------|------------|
| Prostate Cancer Mimic Sorter | Distinguish benign mimics vs cancer | Architecture + IHC clues | Broad category | Icons | Educational |
| Urothelium CIS vs Reactive Tool | Evaluate atypia clues | Cartoon nuclei + architecture | Category | Tile UI | Non-diagnostic |
| RCC Subtype Navigator | Architecture + cytoplasm + stroma | Key clues | RCC subtype family | Icons | Educational |
| Chromophobe vs Oncocytoma Finder | CK7 + morphology | Synthetic IHC patterns | Broad category | Icon panels | No lab advice |
| Germ Cell Tumor Classifier | Pattern clues | Morph icons | Tumor family | Educational |
| Medical Kidney Pattern Explorer | Glomerular/tubular/vascular icons | Injury pattern | Conceptual pattern | Synthetic |
| Prostate Biomarker Panel Simulator | p63/HMWK/AMACR cartoons | Biomarker pattern | “Benign-like” vs “Malignant-like” | Icons | Educational only |
| Integrated GU Case Builder | Combine morph + IHC + molecular | Synthetic report | Template | Not for patient care |

---

# **6. ASSESSMENT (Session-Only)**

Item types:
- MCQs  
- Prostate cancer mimic questions  
- Flat CIS vs reactive atypia  
- RCC subtype identification  
- Germ cell tumor family ID  
- IHC concept questions  
- Medical kidney pattern recognition  
- Integrated GU cases  

Output:
- “You answered X/Y correctly this session.”  
- No saved scores.

---

# **7. GU PATHOLOGY REASONING FRAMEWORK**

1. **Identify the organ/site**  
2. **Assess architecture**  
3. **Evaluate cytology**  
4. **Determine key pattern family (glandular, urothelial, germ cell, spindle, clear cell)**  
5. **Use IHC conceptually for narrowing**  
6. **Consider high-level molecular categories**  
7. **Integrate all findings**  
8. **Identify pitfalls and avoid overcalls**

Common pitfalls:
- Calling atrophy as prostate cancer  
- Overcalling reactive atypia in bladder  
- Confusing chromophobe RCC with oncocytoma  
- Misidentifying yolk sac patterns  
- Misreading medical kidney biopsies without context  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA  
- Dark mode  
- All content synthetic/illustrative  
- Neutral case naming  
- STRICT disclaimer:  
  “Educational only. Not for diagnosis or clinical decision-making.”  
- Offline support  
- No tracking  

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (session-only)  
- Service Worker for offline support  

Routes:
- `/prostate`  
- `/bladder`  
- `/kidney-tumors`  
- `/medical-kidney`  
- `/testis`  
- `/penis`  
- `/ihc`  
- `/molecular`  
- `/pitfalls`  
- `/cases`  
- `/assessment`  
- `/settings`

Settings ONLY:
- Dark/light  
- About  
- Disclaimer  

---

# **10. DATA SCHEMAS**

### GU Case Schema

{
"id": "gu_case_09",
"site": "prostate",
"features": ["small acinar pattern", "absent basal layer cartoon"],
"ihc": {"p63": "negative", "AMACR": "positive"},
"question": "Broad category?",
"options": ["Benign mimic", "Malignant"],
"correct": "Malignant",
"rationale": "Absence of basal layer + AMACR positivity conceptually supports malignancy."
}


### RCC Subtype Schema


{
"id": "rcc_case_23",
"architecture": "clear cells + delicate vasculature",
"ihc": {"CK7": "negative"},
"interpretation": "Clear cell RCC pattern (synthetic)."
}


### Germ Cell Tumor Schema


{
"id": "testis_case_5",
"pattern": ["syncytiotrophoblast cartoon", "hemorrhage"],
"interpretation": "Choriocarcinoma-like pattern (synthetic)."
}


---

# **11. SCREEN INVENTORY & WIREFRAMES**

### HOME  
Modules: Prostate • Bladder • Kidney Tumors • Medical Kidney • Testis • Penis • IHC • Molecular • Pitfalls • Cases • Assessment • Settings

### MODULE OVERVIEW  
- Summary  
- Subsections  
- Quick quiz  

### LESSON PAGE  
- Pattern diagrams  
- IHC/molecular conceptual cards  
- Pitfall callouts  

### CASE ENGINE  
- GU cases with morph + IHC + synthetic molecular  
- Instant feedback  

### ASSESSMENT  
- 10–20 questions  
- Session-only scoring  

### SETTINGS  
- Dark/light  
- About  
- Disclaimer  

---

# **12. COPY & CONTENT KIT**

Examples:
- “Prostate cancer lacks a basal layer — confirmed conceptually by p63/HMWK negative.”  
- “Urothelial CIS shows marked atypia + full-thickness nuclear abnormalities.”  
- “Papillary RCC is CK7-positive conceptually.”  
- “Chromophobe RCC shows plant-cell borders cartoon.”  
- “Seminoma: large cells with clear cytoplasm and prominent nucleoli cartoon.”  
- “Germ cell tumors share SALL4 positivity conceptually.”

Glossary includes:  
Basal layer, CIS, papillary lesion, clear cell, plant-cell borders, syncytiotrophoblast, intratubular germ cell neoplasia (concept), perineural invasion, etc.

---

# **13. CREATOR-SIDE A/B TESTING (No In-App Tracking)**  
Ideas:
- Mimic vs cancer modules for prostate  
- CIS vs reactive atypia clarity  
- RCC subtype icon comprehension testing  
- Germ cell tumor pattern recognition  

---

# **14. QA CHECKLIST**
- Accurate GU pathology frameworks  
- Icons represent correct morphologic patterns  
- Conceptual, non-lab IHC & molecular  
- No real images or PHI  
- No diagnostic or clinical recommendations  
- Dark-mode & offline validated  

---

# **15. ROADMAP**
- M0: Prostate + Bladder  
- M1: Kidney (tumors + medical)  
- M2: Testis + Penis modules  
- M3: IHC/Molecular + Pitfalls  
- M4: Integrated GU Case Bank (100+ cases)

---

# **ACCEPTANCE CRITERIA**
- Covers full GU pathology curriculum for pathology residency  
- Fully synthetic, illustrative content  
- Mobile-first, offline, dark-mode  
- Educational-only  
- No tracking or PHI  

---

## **NOW GENERATE**
Using this blueprint, generate the full **GU Path Master** educational app specification in the required format and constraints.

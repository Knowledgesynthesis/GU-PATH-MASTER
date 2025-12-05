import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';

export default function PenisPage() {
  return (
    <ModuleTemplate
      title="Penis & Urethra"
      description="Squamous lesions, HPV patterns, urethral pathology"
      icon="📊"
      color="from-indigo-500 to-blue-500"
    >
      <Section title="Normal Anatomy">
        <KeyPoints
          points={[
            'Glans: Non-keratinized squamous epithelium',
            'Penile shaft: Keratinized squamous epithelium',
            'Urethra: Varies by location (squamous distally, transitional proximally)',
            'Foreskin: Inner surface non-keratinized, outer keratinized',
          ]}
        />
      </Section>

      <Section title="Penile Intraepithelial Neoplasia (PeIN)">
        <div className="space-y-4">
          <HighlightBox type="info">
            Precursor lesions to invasive squamous cell carcinoma. Classification
            evolves but generally divided by HPV status and morphology.
          </HighlightBox>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              HPV-Associated PeIN (Warty/Basaloid)
            </h3>
            <KeyPoints
              points={[
                'Associated with high-risk HPV (especially HPV 16)',
                'Basaloid type: Immature basaloid cells, high-grade atypia',
                'Warty type: Koilocytic atypia, papillomatous surface',
                'Full or partial thickness atypia',
                'Mitoses including superficial layers',
                'p16 positive (surrogate for HPV)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              HPV-Independent PeIN (Differentiated)
            </h3>
            <KeyPoints
              points={[
                'Associated with lichen sclerosus',
                'NOT associated with HPV',
                'Basal/parabasal atypia with preserved maturation',
                'Enlarged nuclei with prominent nucleoli',
                'Abnormal keratinization',
                'p16 negative',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Penile Squamous Cell Carcinoma">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Risk Factors</h3>
          <KeyPoints
            points={[
              'HPV infection (40-50% of cases, especially basaloid/warty types)',
              'Lichen sclerosus (HPV-independent pathway)',
              'Chronic inflammation',
              'Phimosis',
              'Tobacco use',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">Usual Type SCC</h3>
          <KeyPoints
            points={[
              'Most common subtype',
              'Keratinizing squamous cell carcinoma',
              'Infiltrative nests with keratin pearls',
              'Variable differentiation (well to poorly differentiated)',
              'May be HPV-associated or HPV-independent',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">Warty Carcinoma</h3>
          <KeyPoints
            points={[
              'HPV-associated (usually HPV 16)',
              'Papillary architecture with hyperkeratosis',
              'Koilocytic atypia',
              'Better prognosis than usual type',
              'p16 positive',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">Basaloid Carcinoma</h3>
          <KeyPoints
            points={[
              'HPV-associated',
              'Solid nests of basaloid cells',
              'Scant cytoplasm, high nuclear/cytoplasmic ratio',
              'Comedonecrosis may be present',
              'Aggressive behavior',
              'p16 positive',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Verrucous Carcinoma
          </h3>
          <KeyPoints
            points={[
              'Low-grade, locally aggressive',
              'Exophytic papillary architecture',
              'Minimal cytologic atypia',
              'Pushing (not infiltrative) borders',
              'NOT HPV-associated',
              'Excellent prognosis if completely excised',
            ]}
          />

          <HighlightBox title="Staging Considerations" type="info">
            Depth of invasion, involvement of corpora, and lymphovascular
            invasion are critical prognostic factors.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Other Penile Lesions (High-Level)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Condyloma Acuminatum</h3>
            <KeyPoints
              points={[
                'Benign HPV-associated lesion (low-risk HPV 6, 11)',
                'Papillary architecture',
                'Koilocytes in superficial layers',
                'No significant cytologic atypia',
                'p16 typically negative or focal weak',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Lichen Sclerosus (Balanitis Xerotica Obliterans)
            </h3>
            <KeyPoints
              points={[
                'Chronic inflammatory condition',
                'Hyperkeratosis and epithelial atrophy',
                'Pale fibrotic dermis (hyalinization)',
                'Lichenoid inflammation at dermal-epidermal junction',
                'Precursor to HPV-independent SCC',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Bowenoid Papulosis
            </h3>
            <KeyPoints
              points={[
                'HPV-associated (usually HPV 16)',
                'Clinically: Multiple papules in young patients',
                'Histology: Full-thickness atypia (resembles SCC in situ)',
                'p16 positive',
                'Benign clinical behavior despite histologic atypia',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Urethral Pathology (High-Level)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Urethral Carcinoma
            </h3>
            <KeyPoints
              points={[
                'Rare; more common in women',
                'Histology varies by location:',
                '  - Distal: Squamous cell carcinoma',
                '  - Proximal: Urothelial carcinoma',
                '  - Adenocarcinoma can occur (periurethral glands)',
                'Prognosis depends on stage and histologic type',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Urethral Polyps/Caruncles
            </h3>
            <KeyPoints
              points={[
                'Benign inflammatory polyps',
                'More common in women',
                'Granulation tissue with inflammation',
                'Surface erosion/ulceration common',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Immunohistochemistry in Penile Lesions">
        <div className="space-y-4">
          <KeyPoints
            points={[
              'p16: Positive in HPV-associated lesions (diffuse, strong)',
              'p53: Aberrant (null or strong diffuse) in differentiated PeIN and HPV-independent SCC',
              'High-risk HPV ISH: Confirms HPV presence',
              'Cytokeratin panels: Help classify poorly differentiated tumors',
            ]}
          />

          <HighlightBox title="p16 Interpretation" type="info">
            Strong, diffuse nuclear and cytoplasmic staining = positive (suggests
            HPV). Focal or weak staining = negative. p16 is a surrogate marker
            but not 100% specific.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Common Pitfalls">
        <div className="space-y-3">
          <HighlightBox title="Pseudoepitheliomatous Hyperplasia vs SCC" type="pitfall">
            Reactive epithelial proliferation can mimic invasive SCC. Look for
            lack of true cytologic atypia and clinical correlation.
          </HighlightBox>

          <HighlightBox
            title="Verrucous Carcinoma vs Condyloma"
            type="pitfall"
          >
            Both are papillary. Verrucous ca shows pushing deep borders and more
            hyperkeratosis. Condyloma has koilocytes and is more exophytic
            without deep growth.
          </HighlightBox>

          <HighlightBox title="Bowenoid Papulosis vs PeIN/SCC in situ" type="pitfall">
            Histologically identical. Diagnosis requires clinicopathologic
            correlation (young patient with multiple papules suggests bowenoid
            papulosis).
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

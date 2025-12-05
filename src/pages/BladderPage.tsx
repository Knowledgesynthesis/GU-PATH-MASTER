import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';
import { Badge } from '@/components/ui/Badge';

export default function BladderPage() {
  return (
    <ModuleTemplate
      title="Bladder & Urothelium"
      description="Reactive vs neoplastic, CIS, papillary lesions, variants"
      icon="🫧"
      color="from-purple-500 to-pink-500"
    >
      <Section title="Normal Urothelial Histology">
        <KeyPoints
          points={[
            'Urothelium is a specialized transitional epithelium',
            'Typically 3-7 cell layers thick',
            'Umbrella cells (superficial cells) are large with abundant cytoplasm',
            'Intermediate and basal cells are smaller',
            'Nuclei are uniform, bland, and evenly spaced',
          ]}
        />
      </Section>

      <Section title="Reactive Atypia vs Flat Carcinoma In Situ">
        <div className="space-y-4">
          <HighlightBox title="Critical Distinction" type="warning">
            Distinguishing reactive atypia from flat CIS is one of the most
            challenging diagnoses in bladder pathology.
          </HighlightBox>

          <div>
            <h3 className="font-semibold text-lg mb-2">Reactive Atypia</h3>
            <KeyPoints
              points={[
                'Preserved maturation from base to surface',
                'Umbrella cells retain their morphology',
                'Nuclear enlargement but maintained polarity',
                'Nucleoli may be present but uniform',
                'Often associated with inflammation or instrumentation',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Flat Carcinoma In Situ (CIS)
            </h3>
            <KeyPoints
              points={[
                'Full-thickness nuclear abnormalities',
                'Loss of maturation/polarity',
                'Marked nuclear pleomorphism',
                'Prominent, often irregular nucleoli',
                'Increased nuclear/cytoplasmic ratio',
                'Loss of cohesion (cells appear dyscohesive)',
                'May show mitotic figures at all levels',
              ]}
            />
            <HighlightBox title="High-Yield Features of CIS" type="info">
              <ul className="space-y-1 mt-2">
                <li>• Pleomorphic nuclei throughout all layers</li>
                <li>• Loss of umbrella cells</li>
                <li>• Irregular nuclear contours</li>
                <li>• Clumped chromatin</li>
                <li>• Cellular dyscohesion</li>
              </ul>
            </HighlightBox>
          </div>

          <HighlightBox title="Pitfall" type="pitfall">
            CIS can be subtle and easily missed on routine sections. High index
            of suspicion needed in patients with positive urine cytology but no
            visible lesion.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Papillary Urothelial Lesions">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Urothelial Papilloma</h3>
            <KeyPoints
              points={[
                'Discrete papillary fronds with fibrovascular cores',
                'Normal urothelium (typically <7 cell layers)',
                'No cytologic atypia',
                'Rare in adults (more common in children)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Papillary Urothelial Neoplasm of Low Malignant Potential (PUNLMP)
            </h3>
            <KeyPoints
              points={[
                'Papillary architecture with delicate cores',
                'Thickened urothelium (>7 layers)',
                'Minimal cytologic atypia',
                'Maintained polarity and organization',
                'Rare recurrence, rarely progresses',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Low-Grade Papillary Urothelial Carcinoma
            </h3>
            <KeyPoints
              points={[
                'Papillary growth pattern',
                'Mild to moderate cytologic atypia',
                'Maintained polarity (mostly)',
                'Variability in nuclear size and shape',
                'Rare mitoses',
                'Frequently recurs but rarely progresses',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              High-Grade Papillary Urothelial Carcinoma
            </h3>
            <KeyPoints
              points={[
                'Papillary or solid architecture',
                'Marked cytologic atypia',
                'Loss of polarity',
                'Nuclear pleomorphism',
                'Frequent mitoses (including atypical forms)',
                'May invade lamina propria or muscularis propria',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Inverted Papilloma/Carcinoma
            </h3>
            <KeyPoints
              points={[
                'Endophytic (downward) growth into lamina propria',
                'Smooth pushing border (papilloma)',
                'Trabecular/cord-like architecture',
                'Inverted urothelial carcinoma shows cytologic atypia',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Invasive Urothelial Carcinoma">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Staging Concepts</h3>
            <div className="space-y-2">
              <div>
                <Badge>Ta</Badge>
                <p className="mt-1 text-sm">
                  Non-invasive papillary carcinoma
                </p>
              </div>
              <div>
                <Badge>Tis</Badge>
                <p className="mt-1 text-sm">Flat carcinoma in situ</p>
              </div>
              <div>
                <Badge>T1</Badge>
                <p className="mt-1 text-sm">
                  Invasion into lamina propria (subepithelial connective tissue)
                </p>
              </div>
              <div>
                <Badge>T2</Badge>
                <p className="mt-1 text-sm">
                  Invasion into muscularis propria
                </p>
              </div>
            </div>
            <HighlightBox title="Critical Distinction" type="warning">
              T1 vs T2 distinction is crucial for treatment decisions. T1 may be
              managed with BCG, while T2 often requires cystectomy.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Lymphovascular Invasion
            </h3>
            <KeyPoints
              points={[
                'Tumor cells within endothelial-lined spaces',
                'Strong predictor of metastasis',
                'Must distinguish from retraction artifact',
                'Should be reported in pathology reports',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Variant Histologies">
        <div className="space-y-4">
          <HighlightBox type="info">
            Variant histologies often indicate aggressive behavior and may
            require different treatment approaches.
          </HighlightBox>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Micropapillary Variant
            </h3>
            <KeyPoints
              points={[
                'Small papillary clusters in lacunar spaces',
                'Lacks fibrovascular cores',
                'Highly aggressive',
                'Early lymphovascular invasion',
                'Poor prognosis',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Nested Variant</h3>
            <KeyPoints
              points={[
                'Small, deceptively bland nests in lamina propria',
                'Can mimic von Brunn nests',
                'Infiltrative growth pattern',
                'Often diagnosed late due to bland appearance',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Plasmacytoid Variant
            </h3>
            <KeyPoints
              points={[
                'Discohesive cells resembling plasma cells',
                'Loss of E-cadherin expression',
                'Infiltrative growth',
                'Aggressive behavior',
                'Often presents at advanced stage',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Sarcomatoid Carcinoma
            </h3>
            <KeyPoints
              points={[
                'Malignant spindle cell component',
                'Often mixed with conventional urothelial carcinoma',
                'Highly aggressive',
                'May show heterologous differentiation',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Immunohistochemistry">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Urothelial Markers
            </h3>
            <KeyPoints
              points={[
                'GATA3: Sensitive and specific for urothelial carcinoma',
                'p40: Urothelial marker (also positive in squamous)',
                'CK7: Typically positive',
                'CK20: Variable (often positive in umbrella cells)',
                'Uroplakin: Highly specific but less sensitive',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">CIS vs Reactive</h3>
            <KeyPoints
              points={[
                'CK20: Full-thickness staining suggests CIS',
                'p53: Aberrant (null or diffuse strong) suggests CIS',
                'Ki-67: Increased proliferation in CIS',
                'CD44: Loss in CIS (retained in reactive)',
              ]}
            />
            <HighlightBox title="Note" type="info">
              IHC is an adjunct - morphology remains the gold standard for CIS
              diagnosis.
            </HighlightBox>
          </div>
        </div>
      </Section>

      <Section title="Common Pitfalls">
        <div className="space-y-3">
          <HighlightBox title="Overcalling Reactive Atypia as CIS" type="pitfall">
            Look for preserved maturation and uniform nucleoli in reactive
            changes. When uncertain, consider deeper levels, IHC, or clinical
            correlation.
          </HighlightBox>

          <HighlightBox
            title="Missing Subtle CIS"
            type="pitfall"
          >
            CIS can be patchy and subtle. Examine all areas carefully,
            especially in patients with positive cytology.
          </HighlightBox>

          <HighlightBox
            title="Nested Variant Mimicking Benign Nests"
            type="pitfall"
          >
            von Brunn nests are circumscribed and located in superficial lamina
            propria. Nested variant shows infiltrative growth and extends deeper.
          </HighlightBox>

          <HighlightBox title="Muscularis Mucosae vs Muscularis Propria" type="pitfall">
            Muscularis mucosae (thin wisps) should not be confused with
            muscularis propria (thick bundles). Invasion into muscularis mucosae
            is still T1, not T2.
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

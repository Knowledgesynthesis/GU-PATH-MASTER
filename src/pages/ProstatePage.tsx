import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';
import { Badge } from '@/components/ui/Badge';

export default function ProstatePage() {
  return (
    <ModuleTemplate
      title="Prostate Pathology"
      description="Benign conditions, mimics, cancer patterns, and biomarkers"
      icon="🔬"
      color="from-blue-500 to-cyan-500"
    >
      <Section title="Normal Prostate Histology">
        <KeyPoints
          points={[
            'Prostate glands consist of secretory cells and basal cells',
            'Basal cells form a discontinuous layer around acini',
            'Normal glands show variable size and shape',
            'Corpora amylacea (prostatic concretions) are common',
          ]}
        />
        <HighlightBox title="Key Concept" type="info">
          The presence of a basal cell layer (highlighted by p63/HMWK) is the key
          distinguishing feature between benign glands and adenocarcinoma.
        </HighlightBox>
      </Section>

      <Section title="Benign Conditions">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Nodular Hyperplasia (BPH)
            </h3>
            <KeyPoints
              points={[
                'Most common benign prostatic lesion',
                'Nodular proliferation of glands and stroma',
                'Glands vary in size and shape',
                'Basal cell layer present (may be attenuated)',
                'No significant cytologic atypia',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Atrophy Patterns</h3>
            <KeyPoints
              points={[
                'Simple atrophy: Small glands with decreased cytoplasm',
                'Post-atrophic hyperplasia: Crowded small glands',
                'Partial atrophy: Mixed atrophic and hyperplastic features',
                'All retain basal cell layer',
                'Can mimic adenocarcinoma architecturally',
              ]}
            />
            <HighlightBox title="Pitfall" type="pitfall">
              Post-atrophic hyperplasia can show crowded small glands mimicking
              cancer. Always check for basal cells with IHC if uncertain.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Atypical Adenomatous Hyperplasia (AAH)
            </h3>
            <KeyPoints
              points={[
                'Localized proliferation of small crowded glands',
                'Round nodular configuration (unlike cancer)',
                'Basal cell layer present (may be patchy)',
                'Nuclei slightly enlarged but uniform',
                'No significant nucleolar enlargement',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Mimics of Carcinoma">
        <div className="space-y-4">
          <HighlightBox title="Critical Concept" type="warning">
            These lesions can architecturally mimic adenocarcinoma but retain
            basal cells. When in doubt, use basal cell markers (p63, HMWK).
          </HighlightBox>

          <div>
            <h3 className="font-semibold text-lg mb-2">Adenosis</h3>
            <KeyPoints
              points={[
                'Well-circumscribed proliferation of small glands',
                'Lobular architecture (organized pattern)',
                'Basal cells present (confirm with IHC)',
                'Lacks infiltrative growth',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Basal Cell Hyperplasia
            </h3>
            <KeyPoints
              points={[
                'Prominent basal cell proliferation',
                'Can form solid nests or small glands',
                'Peripheral palisading pattern',
                'Strong p63 positivity',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Cowper Glands</h3>
            <KeyPoints
              points={[
                'Normal periurethral structures',
                'Mucin-producing glands',
                'Located in characteristic periurethral location',
                'Cytoplasm is clear/pale (mucin)',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Prostatic Adenocarcinoma (Conceptual Patterns)">
        <div className="space-y-4">
          <HighlightBox title="Diagnostic Criteria" type="info">
            Small acinar proliferation with architectural disorder, cytologic
            atypia, and ABSENCE of basal cell layer.
          </HighlightBox>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Architectural Features
            </h3>
            <KeyPoints
              points={[
                'Infiltrative growth pattern',
                'Loss of lobular organization',
                'Glands of varying sizes (often small)',
                'Back-to-back glands without intervening stroma',
                'Perineural invasion (highly specific)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Cytologic Features</h3>
            <KeyPoints
              points={[
                'Nuclear enlargement',
                'Prominent nucleoli (often single, central)',
                'Increased nuclear/cytoplasmic ratio',
                'Amphophilic cytoplasm',
                'Intraluminal blue mucin (may be present)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Gleason Grade Patterns (Conceptual)
            </h3>
            <div className="space-y-2">
              <div>
                <Badge>Pattern 3</Badge>
                <p className="mt-1 text-sm">
                  Discrete, well-formed glands with infiltrative growth
                </p>
              </div>
              <div>
                <Badge>Pattern 4</Badge>
                <p className="mt-1 text-sm">
                  Fused/cribriform glands, poorly formed glands, or glomeruloid
                  patterns
                </p>
              </div>
              <div>
                <Badge>Pattern 5</Badge>
                <p className="mt-1 text-sm">
                  Solid sheets, cords, single cells, or comedonecrosis
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Cribriform Carcinoma
            </h3>
            <KeyPoints
              points={[
                'Glands with cribriform (sieve-like) architecture',
                'Can be Gleason pattern 3 or 4 depending on features',
                'Large cribriform glands with irregular outline = Grade 4',
                'Small uniform cribriform = may be Grade 3',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Intraductal Carcinoma (IDC-P)
            </h3>
            <KeyPoints
              points={[
                'Malignant cells within pre-existing ducts',
                'Retains basal cell layer (spanning lesion)',
                'Dense cribriform or solid architecture',
                'Marked nuclear atypia',
                'Associated with high-grade invasive cancer',
              ]}
            />
            <HighlightBox title="Important" type="warning">
              IDC-P is not counted separately in Gleason scoring but indicates
              aggressive disease.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Perineural Invasion
            </h3>
            <KeyPoints
              points={[
                'Glands tracking along/around nerves',
                'Highly specific for malignancy',
                'Does not change Gleason score',
                'Should be reported in pathology reports',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Immunohistochemistry (Conceptual)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Basal Cell Markers</h3>
            <KeyPoints
              points={[
                'p63: Nuclear stain, highlights basal cells',
                'High molecular weight cytokeratin (HMWK/34βE12): Cytoplasmic',
                'Both are negative/absent in adenocarcinoma',
                'May show patchy staining in benign mimics',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              AMACR (Alpha-Methylacyl-CoA Racemase)
            </h3>
            <KeyPoints
              points={[
                'Cytoplasmic granular staining',
                'Positive in most prostatic adenocarcinomas',
                'Also positive in high-grade PIN',
                'Can be positive in some benign mimics (atrophy, AAH)',
                'Not 100% sensitive - negative AMACR does not exclude cancer',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Triple Stain Approach
            </h3>
            <div className="bg-muted/50 rounded p-4 text-sm space-y-2">
              <p className="font-semibold">Typical Pattern:</p>
              <div className="space-y-1">
                <p>
                  <Badge variant="outline">Benign</Badge> p63+ / HMWK+ / AMACR−
                </p>
                <p>
                  <Badge variant="outline">Cancer</Badge> p63− / HMWK− / AMACR+
                </p>
              </div>
            </div>
          </div>

          <HighlightBox title="Pitfalls in IHC Interpretation" type="pitfall">
            <ul className="space-y-1 mt-2">
              <li>• Patchy basal staining in benign glands (don't overcall)</li>
              <li>• AMACR can be positive in atrophy and AAH</li>
              <li>• Foamy macrophages can mimic basal staining</li>
              <li>• Atrophic glands may show weak/absent basal staining</li>
            </ul>
          </HighlightBox>
        </div>
      </Section>

      <Section title="Common Diagnostic Pitfalls">
        <div className="space-y-4">
          <HighlightBox title="Atrophy vs Adenocarcinoma" type="pitfall">
            <p>
              Atrophic glands can be small and crowded, mimicking cancer.
              However, atrophy shows:
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Basal cell layer (may need IHC to confirm)</li>
              <li>• Pale/clear cytoplasm (not amphophilic)</li>
              <li>• Small dark nuclei (not enlarged)</li>
              <li>• No prominent nucleoli</li>
            </ul>
          </HighlightBox>

          <HighlightBox title="AAH vs Adenocarcinoma" type="pitfall">
            <p>AAH can show crowded small glands. Key differences:</p>
            <ul className="mt-2 space-y-1">
              <li>• AAH is circumscribed/nodular (not infiltrative)</li>
              <li>• Basal cells present (may be patchy - use IHC)</li>
              <li>• Nucleoli less prominent than cancer</li>
              <li>• No perineural invasion</li>
            </ul>
          </HighlightBox>

          <HighlightBox title="Cribriform Benign Mimics" type="pitfall">
            <p>
              BPH can show cribriform patterns. Benign cribriform features:
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Smooth, rounded contours</li>
              <li>• Basal cell layer present</li>
              <li>• Part of nodular BPH architecture</li>
              <li>• Less nuclear atypia</li>
            </ul>
          </HighlightBox>
        </div>
      </Section>

      <Section title="Clinical Correlation (Educational)">
        <HighlightBox type="info">
          <p className="font-semibold mb-2">Structured Reporting Elements:</p>
          <ul className="space-y-1">
            <li>• Gleason score (primary + secondary patterns)</li>
            <li>• Extent of tumor (% cores, % involvement)</li>
            <li>• Perineural invasion (present/absent)</li>
            <li>• Extraprostatic extension (if present)</li>
            <li>• Location (laterality, zone)</li>
          </ul>
          <p className="mt-3 text-xs">
            Note: Actual reporting requires institutional templates and clinical
            context.
          </p>
        </HighlightBox>
      </Section>
    </ModuleTemplate>
  );
}

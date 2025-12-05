import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';

export default function IHCPage() {
  return (
    <ModuleTemplate
      title="IHC Frameworks"
      description="Marker panels, staining patterns, differential diagnosis"
      icon="🧪"
      color="from-pink-500 to-rose-500"
    >
      <Section title="Introduction to IHC in GU Pathology">
        <HighlightBox type="info">
          Immunohistochemistry (IHC) is an essential tool in GU pathology for
          diagnosis, classification, and prognostication. This module covers
          conceptual frameworks and high-yield marker panels.
        </HighlightBox>
        <div className="mt-4">
          <KeyPoints
            points={[
              'IHC should complement, not replace, morphologic assessment',
              'Use panels of markers (not single stains)',
              'Know sensitivity and specificity of each marker',
              'Be aware of technical pitfalls and artifacts',
              'Clinical correlation is essential',
            ]}
          />
        </div>
      </Section>

      <Section title="Prostate IHC Markers">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Basal Cell Markers
            </h3>
            <div className="space-y-3">
              <div>
                <strong>p63</strong>
                <KeyPoints
                  points={[
                    'Nuclear stain',
                    'Marks basal cells of benign glands',
                    'Negative in adenocarcinoma',
                    'May show patchy staining in atrophy',
                  ]}
                />
              </div>
              <div>
                <strong>High Molecular Weight Cytokeratin (HMWK, 34βE12)</strong>
                <KeyPoints
                  points={[
                    'Cytoplasmic stain',
                    'Marks basal cells',
                    'Negative in adenocarcinoma',
                    'Can show patchy staining in benign glands',
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              AMACR (Alpha-Methylacyl-CoA Racemase, P504S)
            </h3>
            <KeyPoints
              points={[
                'Cytoplasmic granular staining',
                'Positive in most prostatic adenocarcinomas (~80-90%)',
                'Also positive in high-grade PIN',
                'Can be positive in benign mimics (atrophy, AAH)',
                'NOT 100% sensitive - negative does not exclude cancer',
                'Pitfall: Foamy macrophages can mimic positive staining',
              ]}
            />
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              Triple Stain (p63 + HMWK + AMACR)
            </h3>
            <div className="bg-muted/50 rounded p-4">
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Benign glands:</strong> p63+, HMWK+, AMACR− (or weak)
                </div>
                <div>
                  <strong>Adenocarcinoma:</strong> p63−, HMWK−, AMACR+ (strong)
                </div>
                <div>
                  <strong>Atrophy:</strong> p63+ (may be patchy), HMWK+ (may be
                  weak), AMACR variable
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              Prostate-Specific Markers
            </h3>
            <KeyPoints
              points={[
                'PSA (Prostate-Specific Antigen): Positive in prostatic epithelium',
                'Prostatic Acid Phosphatase (PAP): Positive in prostatic tissue',
                'NKX3.1: Nuclear, positive in prostatic epithelium',
                'Useful to confirm prostatic origin in metastases',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Urothelial IHC Markers">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Urothelial Lineage Markers
            </h3>
            <div className="space-y-3">
              <div>
                <strong>GATA3</strong>
                <KeyPoints
                  points={[
                    'Nuclear stain',
                    'Sensitive and specific for urothelial carcinoma',
                    'Also positive in breast carcinoma',
                    'Positive in most urothelial carcinomas',
                  ]}
                />
              </div>
              <div>
                <strong>p40</strong>
                <KeyPoints
                  points={[
                    'Nuclear stain',
                    'Positive in urothelial carcinoma',
                    'Also positive in squamous cell carcinoma',
                    'More specific than p63 (less staining in adenocarcinomas)',
                  ]}
                />
              </div>
              <div>
                <strong>Uroplakin</strong>
                <KeyPoints
                  points={[
                    'Membranous/cytoplasmic',
                    'Highly specific for urothelial differentiation',
                    'Less sensitive (positive in ~60% of urothelial ca)',
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              CIS vs Reactive Atypia
            </h3>
            <KeyPoints
              points={[
                'CK20: Full-thickness staining suggests CIS',
                'p53: Aberrant pattern (null or diffuse strong) suggests CIS',
                'Ki-67: Increased proliferation in CIS (superficial layers)',
                'CD44: Loss in CIS, retained in reactive',
                'IHC is adjunct - morphology is key',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Renal Tumor IHC Markers">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              General Renal Markers
            </h3>
            <KeyPoints
              points={[
                'PAX8: Nuclear, positive in most renal tumors (and Müllerian)',
                'RCC marker: Cytoplasmic, positive in many RCC subtypes',
                'CD10: Membranous, variable in RCC subtypes',
              ]}
            />
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              RCC Subtype Differentiation
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Marker</th>
                    <th className="text-left p-2">Clear Cell</th>
                    <th className="text-left p-2">Papillary</th>
                    <th className="text-left p-2">Chromophobe</th>
                    <th className="text-left p-2">Oncocytoma</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b">
                    <td className="p-2">CK7</td>
                    <td className="p-2">−</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">focal/−</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">CA-IX</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">−/focal</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">c-KIT</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">+++</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">AMACR</td>
                    <td className="p-2">−</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Hale's Iron</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">−</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              Special Situations
            </h3>
            <div className="space-y-2">
              <div>
                <strong>TFE3 Translocation RCC:</strong>
                <p className="text-sm">
                  TFE3 nuclear positivity (requires proper antibody/fixation)
                </p>
              </div>
              <div>
                <strong>Collecting Duct Carcinoma:</strong>
                <p className="text-sm">
                  High molecular weight CK+, CK7+, PAX8+, CD10 variable
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Testicular Tumor IHC Markers">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Germ Cell Tumor Panel
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Marker</th>
                    <th className="text-left p-2">Seminoma</th>
                    <th className="text-left p-2">Embryonal</th>
                    <th className="text-left p-2">Yolk Sac</th>
                    <th className="text-left p-2">Choriocarcinoma</th>
                    <th className="text-left p-2">Teratoma</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b">
                    <td className="p-2">OCT3/4</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">−</td>
                    <td className="p-2">variable</td>
                    <td className="p-2">−</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">CD30</td>
                    <td className="p-2">−</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">SALL4</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">+/focal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Glypican-3</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">CD117</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">variable</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">hCG</td>
                    <td className="p-2">syncytio only</td>
                    <td className="p-2">−</td>
                    <td className="p-2">−</td>
                    <td className="p-2">+++</td>
                    <td className="p-2">−</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">
              Sex Cord-Stromal Markers
            </h3>
            <KeyPoints
              points={[
                'Inhibin: Positive in Leydig and Sertoli cell tumors',
                'Calretinin: Positive in sex cord-stromal tumors',
                'Melan-A: Positive in Leydig cell tumors (and melanoma)',
                'SOX9: Positive in Sertoli cell tumors',
                'All are negative for SALL4, OCT3/4',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="HPV-Related Markers (Penis)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">p16</h3>
            <KeyPoints
              points={[
                'Surrogate marker for high-risk HPV',
                'Positive = strong, diffuse nuclear AND cytoplasmic staining',
                'Focal or weak staining = negative',
                'Positive in HPV-associated PeIN and SCC',
                'Negative in HPV-independent lesions',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">p53</h3>
            <KeyPoints
              points={[
                'Aberrant pattern in HPV-independent pathway',
                'Null pattern (complete absence) = mutation',
                'Diffuse strong (>80% strong nuclear) = mutation',
                'Wild-type = variable mosaic pattern (10-70% weak to moderate)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              High-Risk HPV ISH
            </h3>
            <KeyPoints
              points={[
                'Direct detection of HPV DNA',
                'More specific than p16',
                'Nuclear dot-like signal = positive',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Technical Considerations & Pitfalls">
        <div className="space-y-3">
          <HighlightBox title="Fixation Issues" type="pitfall">
            Poor fixation can cause false-negative or weak staining. Some
            antibodies (e.g., TFE3) are particularly sensitive to fixation.
          </HighlightBox>

          <HighlightBox title="Background Staining" type="pitfall">
            Non-specific background can mimic true positivity. Always compare to
            controls and negative areas.
          </HighlightBox>

          <HighlightBox title="Interpretation Errors" type="pitfall">
            <ul className="mt-2 space-y-1">
              <li>• Foamy macrophages can mimic AMACR positivity</li>
              <li>• Endothelial cells are CD10+, CD31+ (not tumor)</li>
              <li>• Hemosiderin can mimic DAB (brown) staining</li>
              <li>• Edge artifact can cause false staining</li>
            </ul>
          </HighlightBox>

          <HighlightBox title="Panel Approach" type="info">
            Always use a panel of markers, not a single stain. No single marker
            is 100% sensitive or specific.
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

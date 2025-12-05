import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';

export default function MolecularPage() {
  return (
    <ModuleTemplate
      title="Molecular Concepts"
      description="Genetic alterations, fusion genes, pathway concepts"
      icon="🧫"
      color="from-violet-500 to-purple-500"
    >
      <Section title="Introduction">
        <HighlightBox type="info">
          This module covers high-level molecular concepts in GU pathology.
          Focus is on conceptual understanding relevant to classification and
          diagnosis - not clinical molecular testing or treatment selection.
        </HighlightBox>
        <div className="mt-4">
          <KeyPoints
            points={[
              'Molecular findings help classify tumors',
              'Some alterations are diagnostic (e.g., TFE3 fusions)',
              'Others are prognostic or predictive',
              'Integration with morphology and IHC is essential',
            ]}
          />
        </div>
      </Section>

      <Section title="Prostate Molecular Concepts">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              TMPRSS2-ERG Fusion
            </h3>
            <KeyPoints
              points={[
                'Most common genetic alteration in prostate cancer (~50%)',
                'Fusion of androgen-regulated gene TMPRSS2 with ERG (ETS family)',
                'Results in ERG overexpression',
                'Can be detected by ERG IHC (nuclear overexpression)',
                'Not prognostic by itself',
                'Conceptual: Androgen pathway drives oncogene expression',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              PTEN Loss
            </h3>
            <KeyPoints
              points={[
                'Tumor suppressor gene on chromosome 10q',
                'Loss associated with more aggressive disease',
                'Can be detected by PTEN IHC (loss of nuclear staining)',
                'Often co-occurs with TMPRSS2-ERG fusion',
                'Conceptual: Loss of growth regulation',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Other Key Alterations (High-Level)
            </h3>
            <KeyPoints
              points={[
                'TP53 mutations: Associated with progression',
                'RB1 loss: Aggressive disease',
                'DNA repair defects (BRCA1/2, ATM, etc.): Hereditary risk, therapy implications',
                'Androgen receptor (AR) alterations: Castration-resistant disease',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Renal Cell Carcinoma Molecular Concepts">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Clear Cell RCC - VHL Pathway
            </h3>
            <KeyPoints
              points={[
                'VHL (von Hippel-Lindau) gene on chromosome 3p',
                'VHL inactivation in ~90% of clear cell RCC',
                '3p deletion/loss is characteristic',
                'VHL loss leads to HIF (hypoxia-inducible factor) accumulation',
                'HIF drives VEGF, PDGF expression (angiogenesis)',
                'Conceptual: Pseudo-hypoxia state promotes tumor growth',
              ]}
            />
            <HighlightBox type="info">
              VHL syndrome: Germline VHL mutations cause hereditary clear cell
              RCC, hemangioblastomas, pheochromocytomas, and other tumors.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Papillary RCC - MET and Other Alterations
            </h3>
            <div className="space-y-3">
              <div>
                <strong>Type 1 Papillary RCC:</strong>
                <KeyPoints
                  points={[
                    'MET gene alterations (chromosome 7)',
                    'Trisomy 7 and 17',
                    'Hereditary papillary RCC syndrome: Germline MET mutations',
                  ]}
                />
              </div>
              <div>
                <strong>Type 2 Papillary RCC:</strong>
                <KeyPoints
                  points={[
                    'More heterogeneous',
                    'CDKN2A loss',
                    'SETD2, BAP1, PBRM1 mutations',
                    'Fumarate hydratase (FH) deficiency in hereditary cases',
                  ]}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Chromophobe RCC
            </h3>
            <KeyPoints
              points={[
                'Multiple chromosomal losses (1, 2, 6, 10, 13, 17, 21)',
                'Associated with Birt-Hogg-Dubé syndrome (FLCN gene)',
                'TP53, PTEN mutations in some cases',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Translocation RCC
            </h3>
            <KeyPoints
              points={[
                'Gene fusions involving TFE3 or TFEB (transcription factors)',
                'TFE3 fusions: t(X;1), t(X;17) - PRCC-TFE3, ASPSCR1-TFE3',
                'TFEB fusions: t(6;11) - Alpha-TFEB',
                'More common in children and young adults',
                'TFE3 IHC can aid diagnosis (nuclear overexpression)',
                'Molecular confirmation by FISH or sequencing',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Hereditary RCC Syndromes (Conceptual)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Syndrome</th>
                    <th className="text-left p-2">Gene</th>
                    <th className="text-left p-2">RCC Type</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b">
                    <td className="p-2">von Hippel-Lindau</td>
                    <td className="p-2">VHL</td>
                    <td className="p-2">Clear cell RCC</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Hereditary Papillary RCC</td>
                    <td className="p-2">MET</td>
                    <td className="p-2">Papillary type 1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Birt-Hogg-Dubé</td>
                    <td className="p-2">FLCN</td>
                    <td className="p-2">Chromophobe, oncocytoma</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Hereditary Leiomyomatosis RCC</td>
                    <td className="p-2">FH</td>
                    <td className="p-2">Papillary type 2-like</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Testicular GCT Molecular Concepts">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Chromosome 12p Gain/Isochromosome 12p
            </h3>
            <KeyPoints
              points={[
                'Gain of 12p (isochromosome 12p) in ~80% of GCTs',
                'Diagnostic marker for GCTs',
                'Useful in retroperitoneal/mediastinal GCTs of uncertain origin',
                'FISH can detect i(12p)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              KIT (c-KIT) Mutations
            </h3>
            <KeyPoints
              points={[
                'KIT mutations/overexpression common in seminoma and GCNIS',
                'Explains CD117 (c-KIT) IHC positivity',
                'Not typically tested in routine practice',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              TP53 and Other Alterations
            </h3>
            <KeyPoints
              points={[
                'TP53 pathway alterations common',
                'KRAS, NRAS mutations in some GCTs',
                'Molecular profile varies by histologic subtype',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Urothelial Carcinoma Molecular Concepts">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Molecular Subtypes (High-Level)
            </h3>
            <KeyPoints
              points={[
                'Luminal subtypes: FGFR3 alterations, low-grade features',
                'Basal/squamous subtypes: More aggressive, squamous differentiation',
                'Not routinely classified in practice but informs research',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              FGFR3 Alterations
            </h3>
            <KeyPoints
              points={[
                'Common in low-grade, non-invasive urothelial carcinoma',
                'Activating mutations or fusions',
                'Associated with better prognosis',
                'Potential therapeutic target',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              TP53, RB1, and Other Tumor Suppressors
            </h3>
            <KeyPoints
              points={[
                'TP53 mutations common in high-grade/invasive UC',
                'RB1 loss associated with aggressive disease',
                'CDKN2A loss',
                'p53 IHC (aberrant pattern) correlates with mutation',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Penile SCC Molecular Concepts">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              HPV-Associated Pathway
            </h3>
            <KeyPoints
              points={[
                'High-risk HPV (especially HPV 16)',
                'Viral oncoproteins E6 and E7 inactivate p53 and RB',
                'p16 overexpression (surrogate marker for HPV)',
                'Usually wild-type p53 (but functionally inactivated by E6)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              HPV-Independent Pathway
            </h3>
            <KeyPoints
              points={[
                'Associated with lichen sclerosus',
                'TP53 mutations (aberrant p53 IHC pattern)',
                'p16 negative',
                'CDKN2A alterations',
                'Different molecular pathway from HPV-associated',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Key Concepts for Clinical Practice">
        <div className="space-y-3">
          <HighlightBox type="info">
            <strong>Educational Scope:</strong> This module focuses on
            conceptual understanding. Actual molecular testing requires
            specialized laboratories and clinical context.
          </HighlightBox>

          <HighlightBox title="Integration is Key" type="info">
            Molecular findings must be integrated with morphology, IHC, and
            clinical features. Molecular testing alone cannot establish
            diagnosis.
          </HighlightBox>

          <HighlightBox title="Evolving Field" type="warning">
            Molecular classification and testing evolve rapidly. Guidelines and
            testing panels change frequently. Always consult current literature
            and institutional protocols.
          </HighlightBox>

          <HighlightBox title="When to Consider Molecular Testing" type="info">
            <ul className="mt-2 space-y-1">
              <li>• Suspected translocation RCC (especially young patients)</li>
              <li>• Unusual morphology not fitting standard categories</li>
              <li>• Family history suggesting hereditary syndrome</li>
              <li>• Retroperitoneal/mediastinal GCT (i12p testing)</li>
              <li>• Challenging differential diagnosis</li>
            </ul>
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

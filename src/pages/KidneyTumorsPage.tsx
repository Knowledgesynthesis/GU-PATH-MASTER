import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';
import { Badge } from '@/components/ui/Badge';

export default function KidneyTumorsPage() {
  return (
    <ModuleTemplate
      title="Kidney Tumors"
      description="RCC subtypes, oncocytoma, IHC patterns, molecular concepts"
      icon="🔴"
      color="from-red-500 to-orange-500"
    >
      <Section title="Clear Cell Renal Cell Carcinoma">
        <div className="space-y-4">
          <HighlightBox type="info">
            Most common RCC subtype (70-80% of RCC)
          </HighlightBox>

          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Clear cytoplasm (due to glycogen and lipid)',
              'Delicate branching vasculature (chicken-wire pattern)',
              'Nests, alveolar, or solid architecture',
              'Cell borders are distinct',
              'Variable nuclear grade (WHO/ISUP 1-4)',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'CK7: Typically negative (helps distinguish from other RCC)',
              'PAX8: Positive (renal marker)',
              'CA-IX (Carbonic Anhydrase IX): Strong diffuse positivity',
              'CD10: Positive',
              'RCC marker: Positive',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">Molecular (Conceptual)</h3>
          <KeyPoints
            points={[
              'VHL (von Hippel-Lindau) pathway alterations',
              '3p deletion/loss',
              'Associated with VHL syndrome (hereditary cases)',
              'Hypoxia-inducible factor (HIF) pathway activation',
            ]}
          />

          <HighlightBox title="Grading" type="info">
            WHO/ISUP grading based on nucleolar prominence and nuclear features
            (Grade 1-4). Grade 4 shows extreme nuclear pleomorphism or
            rhabdoid/sarcomatoid features.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Papillary Renal Cell Carcinoma">
        <div className="space-y-4">
          <HighlightBox type="info">
            Second most common RCC subtype (10-15% of RCC)
          </HighlightBox>

          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Papillary and tubulopapillary architecture',
              'Fibrovascular cores with foam cells',
              'Hemosiderin-laden macrophages common',
              'Often well-circumscribed',
              'May be multifocal',
            ]}
          />

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Type 1 vs Type 2</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded p-3">
                <Badge>Type 1</Badge>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Small cells, scant cytoplasm</li>
                  <li>• Small nuclei, inconspicuous nucleoli</li>
                  <li>• Better prognosis</li>
                  <li>• Often multifocal</li>
                </ul>
              </div>
              <div className="border rounded p-3">
                <Badge>Type 2</Badge>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Larger cells, eosinophilic cytoplasm</li>
                  <li>• High-grade nuclear features</li>
                  <li>• Worse prognosis</li>
                  <li>• Prominent nucleoli</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'CK7: Positive (diffuse)',
              'AMACR (P504S): Positive',
              'CA-IX: Negative or focal',
              'PAX8: Positive',
              'CD10: Variable',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">Molecular (Conceptual)</h3>
          <KeyPoints
            points={[
              'MET alterations (Type 1)',
              'Trisomy 7 and 17 (Type 1)',
              'CDKN2A loss (Type 2)',
              'Hereditary papillary RCC syndrome (MET germline)',
            ]}
          />
        </div>
      </Section>

      <Section title="Chromophobe Renal Cell Carcinoma">
        <div className="space-y-4">
          <HighlightBox type="info">
            Approximately 5% of RCC; generally favorable prognosis
          </HighlightBox>

          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Plant cell-like borders (prominent cell membranes)',
              'Pale/flocculent cytoplasm',
              'Perinuclear halos',
              'Irregular, wrinkled ("raisinoid") nuclei',
              'Binucleation common',
              'Solid, nested architecture',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">Special Stains</h3>
          <KeyPoints
            points={[
              'Hale\'s colloidal iron: Positive (diffuse cytoplasmic)',
              'Distinguishes from oncocytoma (oncocytoma is negative)',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'CK7: Diffusely positive',
              'c-KIT (CD117): Positive (diffuse)',
              'PAX8: Positive',
              'CA-IX: Negative',
              'AMACR: Negative',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">Molecular (Conceptual)</h3>
          <KeyPoints
            points={[
              'Multiple chromosomal losses (1, 2, 6, 10, 13, 17, 21)',
              'Associated with Birt-Hogg-Dubé syndrome',
              'TP53 and PTEN alterations',
            ]}
          />
        </div>
      </Section>

      <Section title="Oncocytoma">
        <div className="space-y-4">
          <HighlightBox type="info">
            Benign tumor; important to distinguish from chromophobe RCC
          </HighlightBox>

          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Eosinophilic granular cytoplasm (packed with mitochondria)',
              'Central stellate scar (classic but not always present)',
              'Nested or solid architecture',
              'Round, uniform nuclei',
              'No significant atypia',
              'Edematous stroma may be present',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'c-KIT (CD117): Positive (diffuse) - same as chromophobe!',
              'CK7: Focal/negative (vs diffuse in chromophobe)',
              'Hale\'s colloidal iron: Negative (vs positive in chromophobe)',
              'PAX8: Positive',
            ]}
          />

          <HighlightBox title="Chromophobe vs Oncocytoma" type="warning">
            Both are positive for c-KIT. Key differentiators:
            <ul className="mt-2 space-y-1">
              <li>• CK7: Focal in oncocytoma, diffuse in chromophobe</li>
              <li>• Hale\'s iron: Negative in oncocytoma, positive in chromophobe</li>
              <li>• Morphology: Oncocytoma has more uniform eosinophilic cells</li>
              <li>• Nuclei: Round in oncocytoma, irregular in chromophobe</li>
            </ul>
          </HighlightBox>
        </div>
      </Section>

      <Section title="Other RCC Subtypes (High-Level)">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Collecting Duct Carcinoma
            </h3>
            <KeyPoints
              points={[
                'Rare, aggressive subtype',
                'Medullary location',
                'Tubular/glandular architecture',
                'Infiltrative growth',
                'Desmoplastic stroma',
                'High-grade cytology',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Translocation RCC
            </h3>
            <KeyPoints
              points={[
                'More common in young patients',
                'TFE3 or TFEB gene fusions',
                'Variable morphology (clear/eosinophilic cells, papillary)',
                'Psammoma bodies may be present',
                'IHC: TFE3 nuclear positivity (TFE3-fusion type)',
              ]}
            />
            <HighlightBox type="info">
              TFE3 immunostain is useful but must use appropriate antibody and
              fixation. Molecular testing confirms fusion.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Acquired Cystic Disease-Associated RCC
            </h3>
            <KeyPoints
              points={[
                'Occurs in end-stage kidney disease/dialysis patients',
                'Eosinophilic and clear cells',
                'CK7 variable',
                'Calcium oxalate crystals may be present',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Diagnostic Approach to Renal Tumors">
        <div className="space-y-4">
          <HighlightBox title="Systematic Approach" type="info">
            <ol className="space-y-2 mt-2">
              <li>1. Assess architecture (solid, papillary, cystic)</li>
              <li>2. Evaluate cytoplasm (clear, eosinophilic, basophilic)</li>
              <li>3. Examine nuclear features (grade, irregularity)</li>
              <li>4. Look for specific features (plant-cell borders, psammoma bodies)</li>
              <li>5. Use IHC panel to confirm (CK7, c-KIT, CA-IX, AMACR)</li>
            </ol>
          </HighlightBox>

          <h3 className="font-semibold text-lg mt-4">Useful IHC Panel</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Tumor</th>
                  <th className="text-left p-2">CK7</th>
                  <th className="text-left p-2">CA-IX</th>
                  <th className="text-left p-2">c-KIT</th>
                  <th className="text-left p-2">AMACR</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b">
                  <td className="p-2">Clear Cell RCC</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+++</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Papillary RCC</td>
                  <td className="p-2">+++</td>
                  <td className="p-2">−/focal</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+++</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Chromophobe</td>
                  <td className="p-2">+++</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+++</td>
                  <td className="p-2">−</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Oncocytoma</td>
                  <td className="p-2">focal/−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+++</td>
                  <td className="p-2">−</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section title="Common Pitfalls">
        <div className="space-y-3">
          <HighlightBox
            title="Eosinophilic Tumors: Oncocytoma vs Chromophobe vs Papillary Type 2"
            type="pitfall"
          >
            Use combination of morphology, Hale\'s iron, and IHC. Chromophobe
            shows plant-cell borders and diffuse CK7; oncocytoma is more uniform
            with focal CK7.
          </HighlightBox>

          <HighlightBox title="Clear Cell RCC vs Clear Cell Papillary RCC" type="pitfall">
            Clear cell papillary RCC is a distinct entity with low malignant
            potential. Shows CK7+ and CA-IX in linear pattern along basal
            surface (not diffuse).
          </HighlightBox>

          <HighlightBox title="Sarcomatoid Dedifferentiation" type="pitfall">
            Any RCC subtype can show sarcomatoid dedifferentiation. Look for
            residual epithelial component to classify. Sarcomatoid component
            indicates poor prognosis.
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

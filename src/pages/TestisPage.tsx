import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';
import { Badge } from '@/components/ui/Badge';

export default function TestisPage() {
  return (
    <ModuleTemplate
      title="Testis & Paratesticular"
      description="Germ cell tumors, sex cord-stromal, IHC markers"
      icon="🧬"
      color="from-yellow-500 to-amber-500"
    >
      <Section title="Germ Cell Tumors - Overview">
        <HighlightBox type="info">
          Germ cell tumors (GCT) are the most common testicular neoplasms in
          young men. Most are derived from germ cell neoplasia in situ (GCNIS).
        </HighlightBox>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">
            Classification (Simplified)
          </h3>
          <div className="space-y-2">
            <div>
              <Badge>Pure Seminoma</Badge>
              <p className="text-sm mt-1">~50% of GCTs</p>
            </div>
            <div>
              <Badge>Non-Seminomatous GCT</Badge>
              <p className="text-sm mt-1">
                Embryonal carcinoma, yolk sac, choriocarcinoma, teratoma
              </p>
            </div>
            <div>
              <Badge>Mixed GCT</Badge>
              <p className="text-sm mt-1">Combination of two or more types</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Germ Cell Neoplasia In Situ (GCNIS)">
        <KeyPoints
          points={[
            'Precursor to invasive GCT (except spermatocytic tumor)',
            'Atypical germ cells along basement membrane of seminiferous tubules',
            'Large cells with clear cytoplasm and prominent nucleoli',
            'OCT3/4, SALL4, PLAP positive',
            'Often found adjacent to invasive GCT',
          ]}
        />
      </Section>

      <Section title="Seminoma">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Large cells with clear/pale cytoplasm (glycogen)',
              'Distinct cell borders',
              'Round nuclei with prominent nucleoli',
              'Fibrous septa with lymphocytic infiltrate',
              'Granulomatous reaction common',
              'Sheets/nests separated by septa',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'OCT3/4: Nuclear, diffusely positive (sensitive, specific)',
              'SALL4: Nuclear, positive',
              'PLAP: Membranous, positive',
              'CD117 (c-KIT): Membranous, positive',
              'D2-40 (podoplanin): Membranous, positive',
              'CD30: Negative (helps exclude embryonal ca)',
            ]}
          />

          <HighlightBox title="Syncytiotrophoblasts in Seminoma" type="info">
            ~10% of seminomas have scattered syncytiotrophoblast cells (hCG+).
            This does not change diagnosis to mixed GCT or affect management.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Embryonal Carcinoma">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Primitive epithelial appearance',
              'Glandular, papillary, or solid architecture',
              'Overlapping nuclei with prominent nucleoli',
              'Amphophilic cytoplasm (not clear)',
              'High mitotic rate',
              'Geographic necrosis common',
              'Can mimic adenocarcinoma or carcinoma',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'CD30: Membranous/cytoplasmic, diffusely positive (key marker)',
              'OCT3/4: Nuclear, positive',
              'SALL4: Nuclear, positive',
              'PLAP: Variable',
              'CD117: Negative (vs seminoma)',
              'Cytokeratin: Often positive (epithelial differentiation)',
            ]}
          />

          <HighlightBox title="Key Distinction" type="info">
            CD30+ and OCT3/4+ distinguish embryonal ca from seminoma (CD30−) and
            yolk sac tumor (OCT3/4−).
          </HighlightBox>
        </div>
      </Section>

      <Section title="Yolk Sac Tumor">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Microcystic/reticular pattern (most common)',
              'Schiller-Duval bodies (glomeruloid structures) - pathognomonic',
              'Hyaline globules (eosinophilic, PAS+, diastase-resistant)',
              'Multiple architectural patterns possible',
              'Abundant loose, myxoid stroma',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'Glypican-3: Cytoplasmic, positive (sensitive, specific)',
              'SALL4: Nuclear, positive',
              'AFP (alpha-fetoprotein): Cytoplasmic, positive',
              'OCT3/4: Negative (vs embryonal and seminoma)',
              'CD30: Negative',
            ]}
          />

          <HighlightBox title="Pure Yolk Sac Tumor" type="info">
            Pure yolk sac tumor is most common testicular tumor in children
            &lt;3 years (infantile type, not GCNIS-derived).
          </HighlightBox>
        </div>
      </Section>

      <Section title="Choriocarcinoma">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Morphologic Features</h3>
          <KeyPoints
            points={[
              'Biphasic: Cytotrophoblasts and syncytiotrophoblasts',
              'Cytotrophoblasts: Mononuclear, clear cytoplasm',
              'Syncytiotrophoblasts: Multinucleated, abundant eosinophilic cytoplasm',
              'Extensive hemorrhage and necrosis',
              'Highly vascular',
              'Often small component in mixed GCT',
            ]}
          />

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'hCG (beta-hCG): Positive in syncytiotrophoblasts',
              'Cytokeratin: Positive',
              'SALL4: Positive',
              'PLAP: Positive',
              'OCT3/4: Variable in cytotrophoblasts',
            ]}
          />

          <HighlightBox title="Clinical" type="warning">
            Choriocarcinoma is highly aggressive with early hematogenous spread.
            Elevated serum hCG is typical.
          </HighlightBox>
        </div>
      </Section>

      <Section title="Teratoma">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Features</h3>
          <KeyPoints
            points={[
              'Tissues from ≥2 germ layers (ectoderm, mesoderm, endoderm)',
              'Mature teratoma: Well-differentiated tissues (skin, cartilage, GI)',
              'Immature teratoma: Embryonal-type tissues (neuroepithelium)',
              'Teratoma with somatic malignancy: Sarcoma or carcinoma arising in teratoma',
            ]}
          />

          <HighlightBox title="Important Concept" type="info">
            Postpubertal testicular teratoma (even mature) is considered
            malignant (metastatic potential). Prepubertal teratoma is benign.
          </HighlightBox>

          <h3 className="font-semibold text-lg mt-4">
            Immunohistochemistry
          </h3>
          <KeyPoints
            points={[
              'SALL4: Positive (can be focal)',
              'Tissue-specific markers based on components present',
              'OCT3/4: Negative',
              'Glypican-3, CD30, CD117: Negative',
            ]}
          />
        </div>
      </Section>

      <Section title="Sex Cord-Stromal Tumors">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Leydig Cell Tumor</h3>
            <KeyPoints
              points={[
                'Most common sex cord-stromal tumor',
                'Eosinophilic cytoplasm (lipid, lipochrome)',
                'Round nuclei with prominent nucleoli',
                'Reinke crystals (eosinophilic rod-like, pathognomonic but rare)',
                'Usually benign',
                'May present with gynecomastia or precocious puberty',
              ]}
            />
            <div className="mt-2">
              <strong className="text-sm">IHC:</strong>
              <p className="text-sm">
                Inhibin+, Calretinin+, Melan-A+, SALL4−, OCT3/4−
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Sertoli Cell Tumor</h3>
            <KeyPoints
              points={[
                'Tubular architecture (resembles seminiferous tubules)',
                'Pale to eosinophilic cytoplasm',
                'Most are benign',
                'Large cell calcifying variant in Carney complex/Peutz-Jeghers',
              ]}
            />
            <div className="mt-2">
              <strong className="text-sm">IHC:</strong>
              <p className="text-sm">
                Inhibin+, Calretinin+, SOX9+, SALL4−, OCT3/4−
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Diagnostic Approach to Testicular Tumors">
        <div className="space-y-4">
          <HighlightBox title="Initial Assessment" type="info">
            <ol className="space-y-2 mt-2">
              <li>1. Determine if germ cell or sex cord-stromal</li>
              <li>2. If GCT: Seminoma vs non-seminomatous vs mixed</li>
              <li>3. Document all components in mixed tumors with %</li>
              <li>4. Assess for vascular invasion, tunica, cord involvement</li>
              <li>5. Use IHC panel to confirm difficult cases</li>
            </ol>
          </HighlightBox>

          <h3 className="font-semibold text-lg mt-4">Useful IHC Panel</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Tumor</th>
                  <th className="text-left p-2">OCT3/4</th>
                  <th className="text-left p-2">CD30</th>
                  <th className="text-left p-2">SALL4</th>
                  <th className="text-left p-2">Glypican-3</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b">
                  <td className="p-2">Seminoma</td>
                  <td className="p-2">+</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                  <td className="p-2">−</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Embryonal Ca</td>
                  <td className="p-2">+</td>
                  <td className="p-2">+++</td>
                  <td className="p-2">+</td>
                  <td className="p-2">−</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Yolk Sac</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+</td>
                  <td className="p-2">+++</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Teratoma</td>
                  <td className="p-2">−</td>
                  <td className="p-2">−</td>
                  <td className="p-2">+/focal</td>
                  <td className="p-2">−</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section title="Common Pitfalls">
        <div className="space-y-3">
          <HighlightBox title="Seminoma vs Embryonal Carcinoma" type="pitfall">
            Both have large cells with prominent nucleoli. CD30 is key: positive
            in embryonal, negative in seminoma. Seminoma has clear cytoplasm and
            fibrous septa with lymphocytes.
          </HighlightBox>

          <HighlightBox
            title="Yolk Sac Tumor vs Seminoma"
            type="pitfall"
          >
            Both can have clear cells. Yolk sac has microcystic/reticular
            pattern, hyaline globules, and is Glypican-3+/OCT3/4−. Seminoma is
            OCT3/4+/Glypican-3−.
          </HighlightBox>

          <HighlightBox title="Missing Components in Mixed GCT" type="pitfall">
            Always sample extensively. Small foci of embryonal ca or
            choriocarcinoma have prognostic significance even if tiny.
          </HighlightBox>

          <HighlightBox
            title="Rete Testis vs Yolk Sac Tumor"
            type="pitfall"
          >
            Rete testis can have cystic spaces mimicking yolk sac tumor. Rete is
            at hilum, has thick walls, and is SALL4−/Glypican-3−.
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

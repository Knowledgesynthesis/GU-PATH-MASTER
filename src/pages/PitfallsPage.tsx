import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';

export default function PitfallsPage() {
  return (
    <ModuleTemplate
      title="Pitfalls & Mimics"
      description="Common diagnostic challenges and how to avoid them"
      icon="⚠️"
      color="from-orange-500 to-red-500"
    >
      <Section title="Introduction">
        <HighlightBox type="warning">
          Pitfalls and mimics are common in GU pathology. Recognition and
          systematic approaches help avoid diagnostic errors.
        </HighlightBox>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">
            General Principles to Avoid Pitfalls
          </h3>
          <KeyPoints
            points={[
              'Use a systematic approach to each case',
              'Consider clinical context and history',
              'Use IHC judiciously when morphology is unclear',
              'Review deeper levels if findings are atypical',
              'Consult colleagues or references when uncertain',
              'Avoid overcalls - "when in doubt, leave it out"',
            ]}
          />
        </div>
      </Section>

      <Section title="Prostate Pitfalls">
        <div className="space-y-4">
          <HighlightBox
            title="Pitfall #1: Atrophy Mimicking Adenocarcinoma"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Atrophic glands can be small and
                crowded, mimicking small acinar adenocarcinoma.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Atrophy: Basal cells present (may need IHC to confirm)</li>
                  <li>• Atrophy: Pale/clear cytoplasm (not amphophilic)</li>
                  <li>• Atrophy: Small dark nuclei without prominent nucleoli</li>
                  <li>• Atrophy: Often lobular architecture</li>
                  <li>• Cancer: Absent basal cells, amphophilic cytoplasm, prominent nucleoli</li>
                </ul>
              </div>
              <div>
                <strong>Solution:</strong> Use p63/HMWK IHC if uncertain. Atrophy
                retains basal cells.
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #2: Atypical Adenomatous Hyperplasia (AAH) vs Cancer"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> AAH shows crowded small glands that can
                mimic adenocarcinoma.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• AAH: Circumscribed/nodular (not infiltrative)</li>
                  <li>• AAH: Basal cells present (may be patchy - use IHC)</li>
                  <li>• AAH: Less prominent nucleoli than cancer</li>
                  <li>• AAH: No perineural invasion</li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #3: Cowper Glands vs Adenocarcinoma"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Cowper glands can be sampled in
                periurethral biopsies and have clear cytoplasm.
              </div>
              <div>
                <strong>Key Features of Cowper Glands:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Characteristic periurethral location</li>
                  <li>• Mucin-producing (clear/pale cytoplasm)</li>
                  <li>• Lobular architecture</li>
                  <li>• Skeletal muscle often present nearby</li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #4: Patchy Basal Cell Staining"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Benign glands may show patchy or weak
                basal cell staining, potentially causing overcall of cancer.
              </div>
              <div>
                <strong>Solution:</strong> Complete absence of basal cells is
                required for cancer diagnosis. Patchy staining = benign. Always
                correlate with morphology.
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #5: AMACR Positivity in Benign Mimics"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> AMACR can be positive in atrophy and
                AAH.
              </div>
              <div>
                <strong>Solution:</strong> Never use AMACR alone. Always use
                triple stain (p63, HMWK, AMACR) and correlate with morphology.
                Basal cells = benign.
              </div>
            </div>
          </HighlightBox>
        </div>
      </Section>

      <Section title="Bladder/Urothelial Pitfalls">
        <div className="space-y-4">
          <HighlightBox
            title="Pitfall #1: Reactive Atypia vs Flat CIS"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> THE most challenging diagnosis in
                bladder pathology.
              </div>
              <div>
                <strong>Reactive Atypia Features:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Preserved maturation from base to surface</li>
                  <li>• Umbrella cells retained</li>
                  <li>• Nuclear enlargement but maintained polarity</li>
                  <li>• Uniform nucleoli</li>
                  <li>• Often associated with inflammation</li>
                </ul>
              </div>
              <div>
                <strong>Flat CIS Features:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Full-thickness nuclear abnormalities</li>
                  <li>• Loss of maturation and polarity</li>
                  <li>• Marked nuclear pleomorphism</li>
                  <li>• Prominent irregular nucleoli</li>
                  <li>• Cellular dyscohesion</li>
                </ul>
              </div>
              <div>
                <strong>Solution:</strong> When truly uncertain, consider IHC
                (CK20, p53, Ki-67) and clinical correlation. It's acceptable to
                defer to "atypical urothelium" with comment if diagnosis is
                uncertain.
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #2: Nested Variant UC vs von Brunn Nests"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Nested variant UC shows deceptively
                bland nests that mimic benign von Brunn nests.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>
                    • von Brunn: Circumscribed, superficial lamina propria, uniform
                  </li>
                  <li>
                    • Nested variant: Infiltrative, extends deep, irregular
                    architecture
                  </li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #3: Muscularis Mucosae vs Muscularis Propria"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Misidentifying muscularis mucosae as
                muscularis propria leads to overstaging (T2 vs T1).
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Muscularis mucosae: Thin wisps/discontinuous</li>
                  <li>• Muscularis propria: Thick organized bundles</li>
                  <li>• Invasion into muscularis mucosae is still T1</li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #4: Missing Lymphovascular Invasion"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> LVI can be subtle and easily missed.
              </div>
              <div>
                <strong>Solution:</strong> Systematically look for tumor in
                spaces. Must distinguish from retraction artifact (look for
                endothelial lining, red cells in space).
              </div>
            </div>
          </HighlightBox>
        </div>
      </Section>

      <Section title="Kidney Tumor Pitfalls">
        <div className="space-y-4">
          <HighlightBox
            title="Pitfall #1: Chromophobe RCC vs Oncocytoma"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Both are eosinophilic tumors positive
                for c-KIT.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>
                    • Chromophobe: Plant-cell borders, CK7 diffuse+, Hale's iron+
                  </li>
                  <li>
                    • Oncocytoma: Uniform eosinophilic cells, CK7 focal/−, Hale's
                    iron−
                  </li>
                  <li>
                    • Chromophobe: Irregular wrinkled nuclei, perinuclear halos
                  </li>
                  <li>• Oncocytoma: Round uniform nuclei, central scar (may be present)</li>
                </ul>
              </div>
              <div>
                <strong>Solution:</strong> Use Hale's colloidal iron stain and
                CK7 pattern to distinguish.
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #2: Clear Cell Papillary RCC vs Clear Cell RCC"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Both have clear cells.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>
                    • Clear cell papillary: CK7+, CA-IX linear (basal), low nuclear
                    grade
                  </li>
                  <li>• Clear cell RCC: CK7−, CA-IX diffuse, variable grade</li>
                  <li>• Clear cell papillary has low malignant potential</li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #3: Missing Sarcomatoid Dedifferentiation"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Sarcomatoid component can be focal and
                missed on limited sampling.
              </div>
              <div>
                <strong>Solution:</strong> Sample extensively, especially areas
                with necrosis or unusual morphology. Document % sarcomatoid if
                present.
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #4: Papillary RCC Type 2 vs Collecting Duct Carcinoma"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Both can show tubular/papillary
                architecture and high-grade features.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Collecting duct: Medullary location, infiltrative</li>
                  <li>• Collecting duct: High-grade, desmoplastic stroma</li>
                  <li>• Papillary type 2: Cortical, papillary predominant</li>
                </ul>
              </div>
            </div>
          </HighlightBox>
        </div>
      </Section>

      <Section title="Testicular Tumor Pitfalls">
        <div className="space-y-4">
          <HighlightBox
            title="Pitfall #1: Seminoma vs Embryonal Carcinoma"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Both have large cells with prominent
                nucleoli.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>
                    • Seminoma: Clear cytoplasm, fibrous septa, lymphocytes,
                    CD30−
                  </li>
                  <li>
                    • Embryonal: Amphophilic cytoplasm, necrosis, glandular/papillary, CD30+++
                  </li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #2: Yolk Sac Tumor vs Seminoma"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Both can have clear cells.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>
                    • Yolk sac: Microcystic/reticular, hyaline globules,
                    Glypican-3+/OCT3/4−
                  </li>
                  <li>
                    • Seminoma: Sheets/nests, fibrous septa, OCT3/4+/Glypican-3−
                  </li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #3: Rete Testis vs Yolk Sac Tumor"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Rete testis can have cystic spaces
                mimicking yolk sac tumor.
              </div>
              <div>
                <strong>Key Differences:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Rete: At hilum, thick walls, bland, SALL4−/Glypican-3−</li>
                  <li>
                    • Yolk sac: Parenchymal, delicate reticular, atypia,
                    SALL4+/Glypican-3+
                  </li>
                </ul>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #4: Missing Small Foci in Mixed GCT"
            type="pitfall"
          >
            <div className="space-y-2 mt-2">
              <div>
                <strong>Problem:</strong> Small foci of embryonal carcinoma or
                choriocarcinoma have prognostic significance.
              </div>
              <div>
                <strong>Solution:</strong> Sample extensively. Document all
                components with percentages. Even tiny foci matter.
              </div>
            </div>
          </HighlightBox>
        </div>
      </Section>

      <Section title="General IHC Pitfalls">
        <div className="space-y-4">
          <HighlightBox
            title="Pitfall #1: Relying on Single Marker"
            type="pitfall"
          >
            <div className="mt-2">
              <strong>Solution:</strong> Always use panels. No marker is 100%
              sensitive or specific.
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #2: Background/Non-Specific Staining"
            type="pitfall"
          >
            <div className="mt-2">
              <strong>Solution:</strong> Compare to controls. Look at internal
              negative controls. Don't overcall weak/focal staining.
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #3: Foamy Macrophages Mimicking Positivity"
            type="pitfall"
          >
            <div className="mt-2">
              <strong>Examples:</strong> Macrophages can mimic AMACR+ or basal
              cell staining. Look at nuclear features to distinguish macrophages
              from glandular cells.
            </div>
          </HighlightBox>

          <HighlightBox
            title="Pitfall #4: Fixation Artifacts"
            type="pitfall"
          >
            <div className="mt-2">
              <strong>Solution:</strong> Poor fixation can cause false negatives.
              Be aware of pre-analytic issues.
            </div>
          </HighlightBox>
        </div>
      </Section>

      <Section title="Final Reminders">
        <div className="space-y-3">
          <HighlightBox type="info">
            <ul className="space-y-2">
              <li>
                • <strong>When in doubt, don't overcall:</strong> Better to defer
                or describe findings than make incorrect diagnosis
              </li>
              <li>
                • <strong>Use clinical correlation:</strong> History, labs, and
                imaging provide essential context
              </li>
              <li>
                • <strong>Sample adequately:</strong> Many pitfalls avoided by
                thorough sampling and levels
              </li>
              <li>
                • <strong>Consult when needed:</strong> Seek second opinions for
                challenging cases
              </li>
              <li>
                • <strong>Continuous learning:</strong> Review challenging cases
                and learn from errors
              </li>
            </ul>
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

import ModuleTemplate, {
  Section,
  HighlightBox,
  KeyPoints,
} from '@/components/ModuleTemplate';

export default function MedicalKidneyPage() {
  return (
    <ModuleTemplate
      title="Medical Kidney"
      description="Glomerular patterns, tubulointerstitial, vascular lesions"
      icon="🩺"
      color="from-green-500 to-teal-500"
    >
      <Section title="Introduction">
        <HighlightBox type="info">
          Medical kidney (renal) biopsies evaluate non-neoplastic disease. This
          module covers high-level pattern recognition for pathology residents -
          not intended as nephropathology subspecialty training.
        </HighlightBox>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Biopsy Adequacy</h3>
          <KeyPoints
            points={[
              'Ideal: >10 glomeruli for light microscopy',
              'IF (immunofluorescence) and EM (electron microscopy) often required',
              'Cortex with glomeruli is essential',
            ]}
          />
        </div>
      </Section>

      <Section title="Glomerular Injury Patterns">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Minimal Change Disease (Conceptual)
            </h3>
            <KeyPoints
              points={[
                'Light microscopy: Normal-appearing glomeruli',
                'EM: Podocyte foot process effacement (diagnostic)',
                'IF: Negative or minimal nonspecific staining',
                'Clinical: Nephrotic syndrome, often in children',
                'Typically steroid-responsive',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Focal Segmental Glomerulosclerosis (FSGS)
            </h3>
            <KeyPoints
              points={[
                'Focal: Some glomeruli affected (not all)',
                'Segmental: Part of glomerulus (not global)',
                'Sclerosis with capillary collapse and hyalinosis',
                'Podocyte foot process effacement on EM',
                'Several variants (tip, perihilar, collapsing, etc.)',
              ]}
            />
            <HighlightBox title="Pitfall" type="pitfall">
              FSGS can be missed if inadequate glomeruli are sampled. Deep
              levels may be needed.
            </HighlightBox>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Membranous Nephropathy
            </h3>
            <KeyPoints
              points={[
                'Thickened glomerular basement membrane (GBM)',
                'Subepithelial immune deposits ("spikes" on silver stain)',
                'IF: Granular IgG and C3 along capillary walls',
                'EM: Subepithelial electron-dense deposits',
                'Primary (PLA2R antibodies) or secondary',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Membranoproliferative GN (MPGN)
            </h3>
            <KeyPoints
              points={[
                'Mesangial proliferation and GBM thickening',
                'Lobular accentuation of glomerular tufts',
                'Double contours ("tram-tracking") of GBM',
                'IF pattern varies by type (C3 vs immune complex)',
                'Classified by IF pattern (C3 glomerulopathy vs Ig-positive)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">IgA Nephropathy</h3>
            <KeyPoints
              points={[
                'Mesangial proliferation (variable)',
                'IF: Dominant or co-dominant IgA in mesangium (diagnostic)',
                'EM: Mesangial electron-dense deposits',
                'Can range from minimal to crescentic GN',
                'Most common primary glomerulonephritis worldwide',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Crescentic Glomerulonephritis
            </h3>
            <KeyPoints
              points={[
                'Crescents: Proliferation in Bowman\'s space',
                'Rapidly progressive renal failure',
                'Categories: Pauci-immune, anti-GBM, immune complex',
                'Pauci-immune: ANCA-associated (minimal IF staining)',
                'Anti-GBM: Linear IgG along GBM (Goodpasture)',
                'Immune complex: Granular IF (lupus, post-infectious)',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Tubulointerstitial Patterns">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Acute Tubular Injury (ATI)
            </h3>
            <KeyPoints
              points={[
                'Tubular epithelial simplification/flattening',
                'Loss of brush border',
                'Tubular dilation',
                'Epithelial necrosis (may be present)',
                'Regenerative changes (mitoses, nucleomegaly)',
                'Interstitial edema',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Acute Tubulointerstitial Nephritis
            </h3>
            <KeyPoints
              points={[
                'Interstitial inflammation (lymphocytes, plasma cells)',
                'Tubulitis (inflammatory cells in tubular epithelium)',
                'Tubular injury',
                'Eosinophils suggest drug reaction',
                'Granulomas in some cases (sarcoid, drug)',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Chronic Tubulointerstitial Disease
            </h3>
            <KeyPoints
              points={[
                'Tubular atrophy',
                'Interstitial fibrosis',
                'Chronic inflammation (variable)',
                'Glomerulosclerosis (secondary)',
                'Vascular changes (arteriosclerosis)',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Vascular Patterns">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Thrombotic Microangiopathy (TMA)
            </h3>
            <KeyPoints
              points={[
                'Glomerular capillary thrombi',
                'Mesangiolysis (mesangial matrix dissolution)',
                'Endothelial swelling',
                'Arteriolar thrombosis',
                'Red cell fragmentation (clinical)',
                'Causes: HUS, TTP, malignant hypertension, drugs',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Arterionephrosclerosis (Hypertensive Nephrosclerosis)
            </h3>
            <KeyPoints
              points={[
                'Arteriosclerosis with intimal fibrosis',
                'Hyaline arteriolosclerosis',
                'Global glomerulosclerosis (secondary)',
                'Tubular atrophy and interstitial fibrosis',
              ]}
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Vasculitis</h3>
            <KeyPoints
              points={[
                'Fibrinoid necrosis of vessel walls',
                'Acute inflammation in vessel walls',
                'Often associated with crescentic GN',
                'ANCA-associated: GPA, MPA, EGPA',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Special Stains in Renal Pathology">
        <div className="space-y-4">
          <KeyPoints
            points={[
              'PAS (Periodic Acid-Schiff): Highlights basement membranes, mesangium',
              'Jones methenamine silver: Best for GBM detail, spikes in membranous',
              'Trichrome: Highlights fibrosis and sclerosis',
              'Congo red: Amyloid detection (apple-green birefringence)',
            ]}
          />
        </div>
      </Section>

      <Section title="Immunofluorescence Patterns">
        <div className="space-y-4">
          <HighlightBox type="info">
            IF is essential for diagnosis. Common patterns:
          </HighlightBox>
          <KeyPoints
            points={[
              'Linear GBM: Anti-GBM disease (IgG)',
              'Granular capillary wall: Membranous (IgG, C3), lupus',
              'Mesangial IgA: IgA nephropathy (dominant/co-dominant)',
              'Granular "full house": Lupus nephritis (IgG, IgM, IgA, C3, C1q)',
              'Pauci-immune: ANCA-associated GN (minimal/no staining)',
            ]}
          />
        </div>
      </Section>

      <Section title="Important Concepts">
        <div className="space-y-3">
          <HighlightBox type="info">
            Medical kidney biopsies require integration of light microscopy, IF,
            and EM. Clinical correlation (labs, history) is essential.
          </HighlightBox>

          <HighlightBox type="warning">
            This module provides pattern recognition basics. Nephropathology is
            a subspecialty requiring extensive training. Consult nephropathology
            texts and experts for detailed diagnosis.
          </HighlightBox>

          <HighlightBox title="Nephrotic vs Nephritic" type="info">
            <div className="space-y-2">
              <div>
                <strong>Nephrotic:</strong> Heavy proteinuria, edema,
                hypoalbuminemia (minimal change, membranous, FSGS)
              </div>
              <div>
                <strong>Nephritic:</strong> Hematuria, RBC casts, hypertension
                (post-infectious GN, IgA nephropathy, crescentic GN)
              </div>
            </div>
          </HighlightBox>
        </div>
      </Section>
    </ModuleTemplate>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useThemeStore } from '@/store/themeStore';
import { Sun, Moon, Info, Shield } from 'lucide-react';

export default function SettingsPage() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your preferences and learn more about this app
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {theme === 'dark' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                Switch between light and dark mode
              </p>
            </div>
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            About GU Path Master
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-1">Mission</h3>
              <p className="text-sm text-muted-foreground">
                GU Path Master is an educational platform designed to help
                pathology residents and fellows master genitourinary pathology
                through structured, pattern-based learning.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Features</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Comprehensive coverage of GU pathology topics</li>
                <li>• Pattern-based approach to diagnosis</li>
                <li>• IHC and molecular concepts</li>
                <li>• Interactive cases with instant feedback</li>
                <li>• Session-only assessments for self-evaluation</li>
                <li>• Mobile-first, offline-ready design</li>
                <li>• Dark mode optimized for low-light reading</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Content</h3>
              <p className="text-sm text-muted-foreground">
                All educational content is based on standard GU pathology
                references and conceptual frameworks. This app covers prostate,
                bladder, kidney, testis, and penile pathology, along with IHC
                markers and molecular concepts relevant to diagnosis and
                classification.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Privacy & Data</h3>
              <p className="text-sm text-muted-foreground">
                This app does not track user data, collect personal information,
                or save progress. All assessments are session-only. Theme
                preference is stored locally in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Version</h3>
              <p className="text-sm text-muted-foreground">Version 1.0.0</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-destructive mb-2">
                ⚠️ Educational Use Only
              </h3>
              <p className="text-sm">
                This platform is designed exclusively for educational purposes to
                help pathology residents and fellows learn GU pathology concepts.
                It is NOT intended for use in:
              </p>
              <ul className="text-sm mt-2 space-y-1 ml-4">
                <li>• Clinical diagnosis or patient care</li>
                <li>• Medical decision-making</li>
                <li>• Laboratory testing or reporting</li>
                <li>• Treatment planning or recommendations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-destructive mb-2">
                Synthetic Content
              </h3>
              <p className="text-sm">
                All cases, images, and clinical scenarios presented in this app
                are synthetic and created for educational purposes only. They do
                not represent real patients or actual clinical cases. No patient
                health information (PHI) is included.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-destructive mb-2">
                Not a Substitute for Training
              </h3>
              <p className="text-sm">
                This app is a supplemental educational tool and does not replace:
              </p>
              <ul className="text-sm mt-2 space-y-1 ml-4">
                <li>• Formal pathology residency or fellowship training</li>
                <li>• Supervised clinical experience</li>
                <li>• Direct review of real cases with faculty</li>
                <li>• Standard pathology textbooks and references</li>
                <li>• Continuing medical education requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-destructive mb-2">
                No Warranty or Guarantee
              </h3>
              <p className="text-sm">
                While we strive for accuracy, this educational content is
                provided "as is" without any warranties. The information may
                contain errors or become outdated as medical knowledge evolves.
                Always consult current medical literature, institutional
                protocols, and expert consultation for actual clinical practice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-destructive mb-2">
                Liability Limitation
              </h3>
              <p className="text-sm">
                The creators and distributors of this educational platform are
                not liable for any errors, omissions, or consequences arising
                from the use of this content. Users are responsible for verifying
                information and seeking appropriate professional guidance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-destructive mb-2">
                Evolving Field
              </h3>
              <p className="text-sm">
                Pathology is a rapidly evolving field. Classification systems,
                terminology, IHC markers, and molecular testing change
                frequently. Always refer to the most current WHO classifications,
                CAP protocols, and peer-reviewed literature for up-to-date
                information.
              </p>
            </div>

            <div className="pt-3 border-t border-destructive/20">
              <p className="text-sm font-semibold">
                By using this application, you acknowledge and accept these
                disclaimers and understand that this is an educational tool only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Acknowledgments</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This educational platform was created to support pathology resident
            education in genitourinary pathology. Content is based on standard
            pathology references and teaching practices. We acknowledge the
            numerous pathology educators, researchers, and authors whose work
            forms the foundation of GU pathology education.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

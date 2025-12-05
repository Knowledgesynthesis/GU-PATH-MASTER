import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cases } from '@/data/cases';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showRationale, setShowRationale] = useState(false);

  const currentCase = cases.find((c) => c.id === selectedCase);

  const handleCaseSelect = (caseId: string) => {
    setSelectedCase(caseId);
    setSelectedAnswer(null);
    setShowRationale(false);
  };

  const handleAnswerSubmit = () => {
    setShowRationale(true);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowRationale(false);
  };

  const isCorrect = selectedAnswer === currentCase?.correctAnswer;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Case Bank</h1>
        <p className="text-muted-foreground mt-2">
          Integrated synthetic cases combining morphology, IHC, and molecular
          findings
        </p>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-sm flex items-center gap-2">
          <span className="text-xl">ℹ️</span>
          All cases are synthetic and educational only. Not for clinical use.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-3">
          <h2 className="font-semibold text-lg">Select a Case</h2>
          <div className="space-y-2">
            {cases.map((caseItem) => (
              <Button
                key={caseItem.id}
                variant={selectedCase === caseItem.id ? 'default' : 'outline'}
                className="w-full justify-start text-left h-auto py-3"
                onClick={() => handleCaseSelect(caseItem.id)}
              >
                <div>
                  <div className="font-semibold">{caseItem.title}</div>
                  <Badge variant="secondary" className="mt-1">
                    {caseItem.site}
                  </Badge>
                </div>
              </Button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {!currentCase ? (
            <Card>
              <CardContent className="p-12 text-center text-muted-foreground">
                Select a case from the list to begin
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{currentCase.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {currentCase.site}
                      </Badge>
                    </div>
                    {showRationale && (
                      <Button variant="ghost" size="sm" onClick={handleReset}>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Clinical/Morphologic Features</h3>
                    <ul className="space-y-1">
                      {currentCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentCase.ihc && (
                    <div>
                      <h3 className="font-semibold mb-2">
                        Immunohistochemistry Results
                      </h3>
                      <div className="space-y-1">
                        {Object.entries(currentCase.ihc).map(([marker, result]) => (
                          <div
                            key={marker}
                            className="flex items-center gap-2 text-sm bg-muted/50 p-2 rounded"
                          >
                            <Badge variant="outline">{marker}</Badge>
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentCase.molecular && (
                    <div>
                      <h3 className="font-semibold mb-2">Molecular Concepts</h3>
                      <p className="text-sm bg-muted/50 p-3 rounded">
                        {currentCase.molecular}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{currentCase.question}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {currentCase.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          if (!showRationale) {
                            setSelectedAnswer(option);
                          }
                        }}
                        disabled={showRationale}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          selectedAnswer === option
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        } ${
                          showRationale && option === currentCase.correctAnswer
                            ? 'border-green-500 bg-green-500/10'
                            : ''
                        } ${
                          showRationale &&
                          selectedAnswer === option &&
                          option !== currentCase.correctAnswer
                            ? 'border-red-500 bg-red-500/10'
                            : ''
                        } disabled:cursor-not-allowed`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showRationale && option === currentCase.correctAnswer && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {showRationale &&
                            selectedAnswer === option &&
                            option !== currentCase.correctAnswer && (
                              <XCircle className="h-5 w-5 text-red-500" />
                            )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {!showRationale && selectedAnswer && (
                    <Button onClick={handleAnswerSubmit} className="w-full">
                      Submit Answer
                    </Button>
                  )}

                  {showRationale && (
                    <div className="space-y-4 pt-4 border-t">
                      <div
                        className={`p-4 rounded-lg ${
                          isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'
                        }`}
                      >
                        <div className="flex items-center gap-2 font-semibold">
                          {isCorrect ? (
                            <>
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <span className="text-green-700 dark:text-green-400">
                                Correct!
                              </span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-5 w-5 text-red-500" />
                              <span className="text-red-700 dark:text-red-400">
                                Incorrect
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Rationale</h4>
                        <p className="text-sm text-muted-foreground">
                          {currentCase.rationale}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

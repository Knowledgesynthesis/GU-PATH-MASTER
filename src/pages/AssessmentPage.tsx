import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { questions } from '@/data/questions';
import { useAssessmentStore } from '@/store/assessmentStore';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

export default function AssessmentPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showRationale, setShowRationale] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { addAnswer, clearAnswers, getScore } = useAssessmentStore();

  useEffect(() => {
    clearAnswers();
  }, [clearAnswers]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answer: string) => {
    if (!showRationale) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      addAnswer({
        questionId: currentQuestion.id,
        selectedOption: selectedAnswer,
        isCorrect,
      });
      setShowRationale(true);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setIsComplete(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowRationale(false);
    }
  };

  const handleRestart = () => {
    clearAnswers();
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowRationale(false);
    setIsComplete(false);
  };

  const score = getScore();
  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                {percentage}%
              </div>
              <p className="text-muted-foreground">
                You answered {score.correct} out of {score.total} questions correctly
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-2">
              <p className="text-sm font-semibold">Session-Only Results</p>
              <p className="text-sm text-muted-foreground">
                Your results are displayed for this session only and are not saved.
                This assessment is for educational practice and self-evaluation.
              </p>
            </div>

            <div className="space-y-2">
              <Button onClick={handleRestart} className="w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                Start New Assessment
              </Button>
            </div>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Review the module content to strengthen your understanding of challenging topics.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Assessment</h1>
        <p className="text-muted-foreground mt-2">
          Test your knowledge with these GU pathology questions
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="flex gap-2">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-8 rounded-full ${
                idx < currentQuestionIndex
                  ? 'bg-primary'
                  : idx === currentQuestionIndex
                  ? 'bg-primary/50'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-3">
                {currentQuestion.category}
              </Badge>
              <CardTitle className="text-lg leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                disabled={showRationale}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === option
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                } ${
                  showRationale && option === currentQuestion.correctAnswer
                    ? 'border-green-500 bg-green-500/10'
                    : ''
                } ${
                  showRationale &&
                  selectedAnswer === option &&
                  option !== currentQuestion.correctAnswer
                    ? 'border-red-500 bg-red-500/10'
                    : ''
                } disabled:cursor-not-allowed`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">{option}</span>
                  {showRationale && option === currentQuestion.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  )}
                  {showRationale &&
                    selectedAnswer === option &&
                    option !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    )}
                </div>
              </button>
            ))}
          </div>

          {!showRationale && selectedAnswer && (
            <Button onClick={handleSubmitAnswer} className="w-full">
              Submit Answer
            </Button>
          )}

          {showRationale && (
            <div className="space-y-4 pt-4 border-t">
              <div
                className={`p-4 rounded-lg ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'bg-green-500/10'
                    : 'bg-red-500/10'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
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

              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Rationale</h4>
                <p className="text-sm text-muted-foreground">
                  {currentQuestion.rationale}
                </p>
              </div>

              <Button onClick={handleNext} className="w-full">
                {isLastQuestion ? 'View Results' : 'Next Question'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-xs text-muted-foreground text-center">
          Results are session-only and not saved. For educational practice only.
        </p>
      </div>
    </div>
  );
}

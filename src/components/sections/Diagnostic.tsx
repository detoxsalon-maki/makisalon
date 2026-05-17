import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { salonContent } from '../../config/salon-content';
import CTAButton from '../common/CTAButton';

const Diagnostic = () => {
    const { diagnostic, line } = salonContent;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (answer: string) => {
        setAnswers([...answers, answer]);
        if (currentQuestion < diagnostic.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsFinished(true);
        }
    };

    return (
        <section id="diagnostic" className="py-28 bg-charcoal-800 relative overflow-hidden">
            {/* 背景テクスチャ */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-[0.04]"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl border border-gold-300/20 rounded-sm bg-cream-50/97 backdrop-blur-md shadow-2xl p-8 md:p-16">
                {!isFinished ? (
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-lg md:text-xl text-gold-700 font-serif tracking-[0.2em] mb-3">{diagnostic.title}</h2>
                            <p className="text-charcoal-700 text-sm font-light tracking-wider">{diagnostic.subtitle}</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between text-xs text-gold-600 mb-2 font-display tracking-[0.2em]">
                                <span>QUESTION {currentQuestion + 1}</span>
                                <span>{currentQuestion + 1} / {diagnostic.questions.length}</span>
                            </div>
                            <div className="w-full bg-gold-100 h-1 rounded-full">
                                <motion.div
                                    className="bg-gradient-to-r from-charcoal-600 to-gold-500 h-1 rounded-full"
                                    initial={{ width: `${(currentQuestion / diagnostic.questions.length) * 100}%` }}
                                    animate={{ width: `${((currentQuestion + 1) / diagnostic.questions.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg md:text-xl font-serif text-charcoal-800 mb-8 text-center tracking-widest leading-relaxed">
                                    {diagnostic.questions[currentQuestion].text}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {diagnostic.questions[currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(option)}
                                            className="border border-gold-200 hover:border-gold-400 text-charcoal-700 hover:text-gold-700 py-4 px-6 text-left rounded-sm transition-all duration-300 hover:bg-gold-50 font-light tracking-wider text-sm"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center py-8"
                    >
                        <div className="w-20 h-20 mx-auto bg-gold-50 rounded-full flex items-center justify-center mb-8 border border-gold-200">
                            <span className="text-gold-500 text-4xl">✨</span>
                        </div>
                        <h3 className="text-2xl font-serif text-gold-700 mb-6 tracking-widest">診断完了</h3>
                        <p className="text-charcoal-700 font-light tracking-wider mb-8 leading-relaxed text-sm">
                            あなたの回答を分析しました。<br />
                            <span className="text-gold-700 font-medium">「{answers[0]}」</span>にお悩みのあなたには、<br />
                            独自の<span className="blur-sm bg-gold-100 select-none">極秘デトックスメソッド</span>が最適です。
                        </p>

                        <div className="bg-cream-100 border border-gold-200 p-8 rounded-sm mb-10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream-100/90 z-10"></div>
                            <h4 className="text-gold-700 font-serif mb-4 tracking-widest relative z-0 text-sm">診断結果レポート</h4>
                            <p className="text-charcoal-700 font-light text-xs tracking-wider leading-loose relative z-0">
                                あなたの現在の状態は、日々のストレスや姿勢の崩れにより、本来持つべき巡りの力が低下しています。<br />
                                今すぐ始めるべき3つの特別なケアとは...
                            </p>
                            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
                                <span className="text-charcoal-800 text-xs tracking-widest bg-white/90 px-4 py-2 rounded-full border border-gold-200 font-medium">
                                    続きは公式LINEで公開中（無料）
                                </span>
                            </div>
                        </div>

                        <CTAButton
                            href={line.url}
                            text={line.ctaText}
                            variant="line"
                            external={true}
                        />
                        <p className="text-xs text-charcoal-600 mt-4 tracking-widest font-light">※登録後、すぐに結果が届きます</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Diagnostic;

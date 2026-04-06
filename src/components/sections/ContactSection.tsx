"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  company: z.string().min(1, "会社名を入力してください"),
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  content: z.string().min(10, "10文字以上入力してください").max(2000, "2000文字以内で入力してください"),
  // Honeypot field (should remain empty)
  website: z.string().max(0, ""),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.website) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: data.company,
          name: data.name,
          email: data.email,
          content: data.content,
        }),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0A192F] border border-[#233554] rounded px-4 py-3 text-[#CCD6F6] text-sm placeholder-[#495670] focus:outline-none focus:border-[#64FFDA] transition-colors";
  const labelClass = "block text-[#A8B2D8] text-sm mb-1.5 font-medium";
  const errorClass = "text-red-400 text-xs mt-1";

  return (
    <section id="contact" className="py-32 px-6 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#64FFDA] font-mono text-sm mb-3 tracking-widest">Contact</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#CCD6F6] flex items-center gap-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            お問い合わせ
            <span className="flex-1 h-px bg-[#233554] max-w-xs hidden md:block" />
          </h2>
          <p className="text-[#8892B0] mt-4 max-w-lg leading-relaxed">
            DX・AI導入・システム開発について、お気軽にご相談ください。
            まずは無料相談よりお願いします。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3
                className="text-[#CCD6F6] font-bold text-lg mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                まず無料で診断しませんか？
              </h3>
              <p className="text-[#8892B0] text-sm leading-relaxed mb-6">
                下記リンクまたはお問い合わせフォームからでも承っております。
                どんな小さなお悩みでも構いません。
              </p>
              <a
                href="https://forms.gle/xh3cYEHpHv55DcoeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-bold text-sm rounded hover:bg-[#64FFDA]/90 transition-all"
              >
                DX無料診断フォーム →
              </a>
            </div>

            <div className="space-y-4">
              {[
                { label: "返信", value: "2営業日以内にご返信します" },
                { label: "初回相談", value: "無料でご相談いただけます" },
                { label: "対応エリア", value: "全国対応（オンライン可）" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <span className="text-[#64FFDA] text-xs mt-1">▹</span>
                  <div>
                    <span className="text-[#64FFDA] font-mono text-xs">{item.label}: </span>
                    <span className="text-[#8892B0] text-sm">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-3"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={48} className="text-[#64FFDA] mb-4" />
                <h3
                  className="text-[#CCD6F6] text-xl font-bold mb-2"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  送信完了しました
                </h3>
                <p className="text-[#8892B0] text-sm mb-6">
                  お問い合わせありがとうございます。
                  <br />
                  2営業日以内にご返信いたします。
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#64FFDA] font-mono text-sm hover:underline"
                >
                  ← 戻る
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px" }}
                  {...register("website")}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="company">
                      会社名 <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="株式会社〇〇"
                      className={inputClass}
                      {...register("company")}
                    />
                    {errors.company && <p className={errorClass}>{errors.company.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="name">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="山田 太郎"
                      className={inputClass}
                      {...register("name")}
                    />
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    メールアドレス <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className={inputClass}
                    {...register("email")}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="content">
                    ご相談内容 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="content"
                    rows={6}
                    placeholder="例: 物流システムのDXを検討しています。現在は在庫管理がExcel中心で..."
                    className={`${inputClass} resize-none`}
                    {...register("content")}
                  />
                  {errors.content && <p className={errorClass}>{errors.content.message}</p>}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded px-4 py-3">
                    <AlertCircle size={16} />
                    <span>送信に失敗しました。時間をおいて再度お試しください。</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#64FFDA] text-[#0A192F] font-bold rounded hover:bg-[#64FFDA]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      送信する
                    </>
                  )}
                </button>
                <p className="text-[#495670] text-xs text-center">
                  送信後、自動返信メールが届きます。迷惑メールフォルダもご確認ください。
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

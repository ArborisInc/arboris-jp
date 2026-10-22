"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function NoticeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-40 pb-0 px-6 bg-[#112240]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl rounded-lg border border-amber-400/40 bg-[#0A192F] px-6 py-5"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-400" />
            <div>
              <p className="text-amber-400 font-mono text-xs mb-2 tracking-widest">
                重要なお知らせ（2026年10月22日）
              </p>
              <p className="text-[#CCD6F6] text-sm leading-relaxed">
                当社名義でリクナビNEXT・はたらいく・とらばーゆ・Indeed・求人ボックス等に掲載されている求人情報、および
                <span className="text-[#E6F1FF] font-medium">「arboris-jet.vercel.app」</span>
                というウェブサイトは、当社が作成・依頼したものではなく、当社とは一切関係ありません。
              </p>
              <p className="text-[#8892B0] text-sm leading-relaxed mt-3">
                当社は現在、求人募集を一切行っておりません。募集を行う場合は本サイト（arboris.jp）でのみ告知いたします。上記の求人・ウェブサイトに記載されている「info@arboris.co.jp」は当社のメールアドレスではありません。
              </p>
              <p className="text-[#8892B0] text-sm leading-relaxed mt-3">
                既に応募・面接等をされた方で不審な点があった場合は、掲載元の求人サイト運営事務局、または警察にご相談ください。お問い合わせは
                <a href="/contact" className="text-[#64FFDA] hover:underline">
                  本サイトのお問い合わせページ
                </a>
                よりお願いいたします。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

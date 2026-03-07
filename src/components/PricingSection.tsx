import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PriceRow {
  duration: string;
  cashReg: string;
  cash30?: string;
  cash50?: string;
  creditReg: string;
  credit30?: string;
  credit50?: string;
}

interface PriceTable {
  title: string;
  rows: PriceRow[];
}

const priceTables: PriceTable[] = [
  {
    title: "Foot Massage",
    rows: [
      { duration: "30 min", cashReg: "$58", cash30: "$40", cash50: "$29", creditReg: "$61", credit30: "$43", credit50: "$32" },
      { duration: "60 min", cashReg: "$90", cash30: "$63", cash50: "$45", creditReg: "$94", credit30: "$67", credit50: "$48" },
      { duration: "90 min", cashReg: "$128", cash30: "$89", cash50: "$64", creditReg: "$132", credit30: "$93", credit50: "$67" },
    ],
  },
  {
    title: "Body Massage",
    rows: [
      { duration: "30 min", cashReg: "$60", cash30: "$42", cash50: "$30", creditReg: "$63", credit30: "$45", credit50: "$33" },
      { duration: "60 min", cashReg: "$98", cash30: "$68", cash50: "$49", creditReg: "$98", credit30: "$71", credit50: "$52" },
      { duration: "90 min", cashReg: "$142", cash30: "$99", cash50: "$71", creditReg: "$146", credit30: "$103", credit50: "$74" },
      { duration: "120 min", cashReg: "$184", cash30: "$131", cash50: "$92", creditReg: "$189", credit30: "$135", credit50: "$96" },
    ],
  },
  {
    title: "Head Therapy",
    rows: [
      { duration: "60 min", cashReg: "$138", cash30: "$97", cash50: "$69", creditReg: "$142", credit30: "$101", credit50: "$72" },
      { duration: "90 min", cashReg: "$207", cash30: "$145", cash50: "$104", creditReg: "$212", credit30: "$149", credit50: "$108" },
      { duration: "120 min", cashReg: "$276", cash30: "$193", cash50: "$138", creditReg: "$282", credit30: "$198", credit50: "$142" },
    ],
  },
  {
    title: "Facial Cleansing & Massage",
    rows: [
      { duration: "30 min", cashReg: "$80", cash30: "$56", cash50: "$40", creditReg: "$83", credit30: "$59", credit50: "$43" },
      { duration: "60 min", cashReg: "$138", cash30: "$97", cash50: "$69", creditReg: "$142", credit30: "$101", credit50: "$72" },
    ],
  },
  {
    title: "Sea Mud Scrub",
    rows: [
      { duration: "30 min", cashReg: "$80", cash30: "$56", cash50: "$40", creditReg: "$83", credit30: "$59", credit50: "$43" },
      { duration: "60 min", cashReg: "$118", cash30: "$83", cash50: "$59", creditReg: "$122", credit30: "$86", credit50: "$62" },
    ],
  },
  {
    title: "Chair Massage",
    rows: [
      { duration: "10 min", cashReg: "$20", cash30: "$14", cash50: "$10", creditReg: "$2", credit30: "$16", credit50: "$12" },
    ],
  },
];

const comboSpecials = [
  { label: "A", name: "60 Min. Body Massage + 30 Min. Foot Massage", cashReg: "$188", cash48: "$98", cash61: "$73", creditReg: "$181", credit48: "$94", credit61: "$69" },
  { label: "B", name: "60 Min. Body Massage + 30 Min. Belly Massage", cashReg: "$207", cash48: "$108", cash61: "$79", creditReg: "$200", credit48: "$101", credit61: "$74" },
  { label: "C", name: "60 Min. Body Massage + 30 Min. Head Scalp Therapy", cashReg: "$198", cash48: "$103", cash61: "$77", creditReg: "$195", credit48: "$99", credit61: "$73" },
  { label: "D", name: "60 Min. Sea Mud Scrub + 30 Min. Belly Massage", cashReg: "$225", cash48: "$117", cash61: "$86", creditReg: "$218", credit48: "$113", credit61: "$81" },
  { label: "E", name: "60 Min. Water Head Therapy + 30 Min. Facial Massage", cashReg: "$258", cash48: "$134", cash61: "$121", creditReg: "$250", credit48: "$130", credit61: "$116" },
  { label: "F", name: "60 Min. Water Head Therapy + 60 Min. Facial Massage", cashReg: "$320", cash48: "$166", cash61: "$150", creditReg: "$313", credit48: "$160", credit61: "$145" },
];

const PriceTableComponent = ({ table, index }: { table: PriceTable; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border rounded-sm overflow-hidden"
    >
      <div className="bg-muted px-6 py-4 border-b border-border">
        <h3 className="font-display text-xl font-semibold text-gradient-gold">{table.title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-muted-foreground font-body text-xs uppercase tracking-wider"></th>
              <th colSpan={3} className="px-4 py-2 text-center text-secondary font-body text-xs uppercase tracking-wider border-r border-border">Cash</th>
              <th colSpan={3} className="px-4 py-2 text-center text-secondary font-body text-xs uppercase tracking-wider">Credit</th>
            </tr>
            <tr className="border-b border-border text-muted-foreground text-xs">
              <th className="px-4 py-2 text-left"></th>
              <th className="px-3 py-2 text-center">Reg.</th>
              <th className="px-3 py-2 text-center">30%</th>
              <th className="px-3 py-2 text-center border-r border-border">50%</th>
              <th className="px-3 py-2 text-center">Reg.</th>
              <th className="px-3 py-2 text-center">30%</th>
              <th className="px-3 py-2 text-center">50%</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-foreground">{row.duration}</td>
                <td className="px-3 py-3 text-center text-foreground">{row.cashReg}</td>
                <td className="px-3 py-3 text-center text-secondary">{row.cash30}</td>
                <td className="px-3 py-3 text-center text-primary font-semibold border-r border-border">{row.cash50}</td>
                <td className="px-3 py-3 text-center text-foreground">{row.creditReg}</td>
                <td className="px-3 py-3 text-center text-secondary">{row.credit30}</td>
                <td className="px-3 py-3 text-center text-primary font-semibold">{row.credit50}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const comboRef = useRef(null);
  const comboInView = useInView(comboRef, { once: true, margin: "-50px" });

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-lg text-secondary tracking-[0.3em] uppercase mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Price List
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Members enjoy 50–60% off all services. Friends & family get 30–45% off.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {priceTables.map((table, i) => (
            <PriceTableComponent key={table.title} table={table} index={i} />
          ))}
        </div>

        {/* Combo Specials */}
        <motion.div
          ref={comboRef}
          initial={{ opacity: 0, y: 30 }}
          animate={comboInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-3xl font-bold text-gradient-gold text-center mb-8">
            Combo Specials
          </h3>
          <div className="bg-card border border-border rounded-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left"></th>
                  <th className="px-4 py-3 text-left text-muted-foreground font-body text-xs uppercase tracking-wider">Combo</th>
                  <th colSpan={3} className="px-4 py-2 text-center text-secondary font-body text-xs uppercase tracking-wider border-r border-border">Cash</th>
                  <th colSpan={3} className="px-4 py-2 text-center text-secondary font-body text-xs uppercase tracking-wider">Credit</th>
                </tr>
                <tr className="border-b border-border text-muted-foreground text-xs">
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                  <th className="px-3 py-2 text-center">Reg.</th>
                  <th className="px-3 py-2 text-center">48%</th>
                  <th className="px-3 py-2 text-center border-r border-border">61%+</th>
                  <th className="px-3 py-2 text-center">Reg.</th>
                  <th className="px-3 py-2 text-center">48%</th>
                  <th className="px-3 py-2 text-center">61%+</th>
                </tr>
              </thead>
              <tbody>
                {comboSpecials.map((combo) => (
                  <tr key={combo.label} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-secondary font-display text-2xl font-bold">{combo.label}</td>
                    <td className="px-4 py-3 text-foreground text-xs">{combo.name}</td>
                    <td className="px-3 py-3 text-center text-foreground">{combo.cashReg}</td>
                    <td className="px-3 py-3 text-center text-secondary">{combo.cash48}</td>
                    <td className="px-3 py-3 text-center text-primary font-semibold border-r border-border">{combo.cash61}</td>
                    <td className="px-3 py-3 text-center text-foreground">{combo.creditReg}</td>
                    <td className="px-3 py-3 text-center text-secondary">{combo.credit48}</td>
                    <td className="px-3 py-3 text-center text-primary font-semibold">{combo.credit61}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="text-center text-muted-foreground mt-8 font-accent italic">
          Essential Oil Massage: Lavender / Arnica / Ginger & more — $12 Extra
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

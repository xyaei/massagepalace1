import Navbar from "@/components/Navbar";
import MembershipSection from "@/components/MembershipSection";
import Footer from "@/components/Footer";

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MembershipSection />
      <Footer />
    </div>
  );
};

export default MembershipPage;


import {
    Facebook,
    HelpCircle,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    Twitter
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full font-exo2 bg-gradient-to-r from-[#eefcff] to-[#dff7fb]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <img
                            src="/Main_Logo.png" // <-- add your logo URL
                            alt="LeadCRM"
                            className="h-10 lg:h-14 mb-4"
                        />

                        <p className=" leading-relaxed mb-6">
                            LeadCRM is LinkedIn integration tool for your CRM.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                        </div>
                    </div>

                    {/* Integrations */}
                    <FooterColumn title="Integrations">
                        <FooterLink label="HubSpot" />
                        <FooterLink label="Salesforce" />
                        <FooterLink label="Pipedrive" />
                        <FooterLink label="Close.io" badge />
                        <FooterLink label="Insightly" badge />
                    </FooterColumn>

                    {/* Alternative */}
                    <FooterColumn title="Alternative">
                        <FooterLink label="Surfe VS LeadCRM" />
                        <FooterLink label="Linkmatch Alternative" />
                    </FooterColumn>

                    {/* Legal */}
                    <FooterColumn title="Legal">
                        <FooterLink label="Privacy Policy" />
                        <FooterLink label="Terms of Use" />
                    </FooterColumn>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Contact Us</h4>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-cyan-600" />
                                support@leadcrm.io
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-cyan-600" />
                                +1 231-538-7466
                            </div>

                            <div className="flex items-center gap-3">
                                <HelpCircle size={18} className="text-cyan-600" />
                                Help Center
                            </div>
                        </div>

                        {/* Chrome Badge */}
                        <div className="mt-6 inline-flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl">
                            <span className=" font-medium">Available in <br /> Chrome</span>

                            <div className="p-1 bg-white rounded-full">
                                <img src="/Chrome_footer.png" alt="Chrome" className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-center text-sm text-gray-600 space-y-3 pt-16">
                    <small>
                        Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
                        LinkedIn(tm) logos and trademarks displayed on this tool are
                        property of LinkedIn. LeadCRM is distributed AS IS. Your use of
                        LeadCRM is at your own risk.
                    </small>
                    {/* Divider */}
                    <div className="my-10 border-t border-gray-300/60" />

                    <p>Copyright © 2025 LeadCRM. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

/* ------------------ Reusable Components ------------------ */

function FooterColumn({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h4 className="font-bold text-xl mb-6 text-[#090F4E]">{title}</h4>
            <div className="space-y-4">{children}</div>
        </div>
    );
}

function FooterLink({
    label,
    badge,
}: {
    label: string;
    badge?: boolean;
}) {
    return (
        <div className="flex items-center gap-2">
            {label}
            {badge && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-200 text-green-800">
                    Coming Soon
                </span>
            )}
        </div>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 text-white cursor-pointer hover:bg-cyan-600 transition">
            {icon}
        </div>
    );
}

import iconchat from '@/assets/icon-chat.webp'
import iconmoney from '@/assets/icon-money.webp'
import iconsecurity from '@/assets/icon-security.webp'

const features = [
    {
        icon: iconchat,
        title: "You are our #1 priority",
        text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        icon: iconmoney,
        title: "More savings means higher rates",
        text: "The more you save with us, the higher your interest rate will be!",
    },
    {
        icon: iconsecurity,
        title: "Security you can trust",
        text: "We use top of the line encryption to make sure your data and money is always safe.",
    }
];

function initFeatures() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((feature, index) =>
                <div className="feature-item" key={index}>
                    <img src={feature.icon} alt="Chat Icon" className="feature-icon" />
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.text}</p>
                </div>
            )}
        </section>
    )
}

export default initFeatures;


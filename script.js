const createElementWithClassName = ({
    type,
    text,
    className
}) => {
    const el = document.createElement(type);
    if(type === 'img') {
        el.src = text;
    } else {
        el.innerHTML = text;
    }
    el.classList.add(className);
    return el;
}

const getContent = (companyName) => {
    return [
        {
            type: 'img',
            content: `https://raw.githubusercontent.com/viswaah/embeddable-widget/main/assets/eftsureLogo.png`
        },
        {
            type: 'h2',
            content: "Information for suppliers"
        },
        {
            type: 'h3',
            content: 'Doing business with eftsure'
        },
        {
            type: 'p',
            content: `<b>${companyName}</b> is committed to building strong, mutually beneficial partnerships with stakeholders and vendors. We’ve designed a procurement process that facilitates ethical and sustainable business partnerships, transparency, timely payment and risk mitigation. This includes protecting both our suppliers and our own organisation from the effects of cyber-crime, fraud attempts and human error.`
        },     
        {
            type: 'h3',
            content: 'What is our verification process?'
        },
        {
            type: 'p',
            content: `Depending on whether your business has already been verified by our payment protection partner, Eftsure, you may receive a digital invitation and/or form. This process, powered by Eftsure, helps make verification easier and minimises the legwork of ad hoc documentation requests or paperwork. It also helps protect your company and <b>${companyName}</b> from cyber-crime attempts.`
        },
        {
            type: 'h3',
            content: 'What is Eftsure?'
        },
        {
            type: 'p',
            content: 'Eftsure is a B2B payment protection service, which we also use to streamline and protect our supplier onboarding process. Whether a threat originates from within our organisation, a supplier or a third-party organisation, Eftsure helps protect our supplier base and reduces the risk of payment error, fraud attempts and cyber-crime. Eftsure’s alert system helps us avoid paying fraudsters instead of the correct recipients, lowering your risk of delayed payment. Read more about Eftsure.'
        },
        {
            type: 'h3',
            content: 'We already completed the onboarding process. Do we still need to register through Eftsure?'
        },
        {
            type: 'p',
            content: `If you’re an existing partner to <b>${companyName}</b>, you might still need to register with Eftsure. This is to protect both of our organisations from risks like external cyber-crime and employee error during the payment process. Once your details are verified by Eftsure, you will not need to be re-verified with any of your other customers who use Eftsure’s solution, although other companies may choose to request additional information or documentation.`
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const embedDiv = document.getElementById('resource-embed');
    const headerClassName = embedDiv.getAttribute('data-header-class'); 
    const subHeaderClassName = embedDiv.getAttribute('data-sub-header-class'); 
    const paragraphClassName = embedDiv.getAttribute('data-paragraph-class');
    const imageClassName = embedDiv.getAttribute('data-image-class');
    const companyName = embedDiv.getAttribute('data-company-name');

    const getClassName = {
        h2: headerClassName,
        h3: subHeaderClassName,
        p: paragraphClassName,
        img: imageClassName
    }
    const content = getContent(companyName);
    for(const con of content) {
        const el = createElementWithClassName({type: con.type, text: con.content, className: getClassName[con.type]})
        embedDiv.appendChild(el);
    }
});
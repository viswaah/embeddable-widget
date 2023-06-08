const createElementWithClassName = ({
    type,
    text,
    className
}) => {
    const el = document.createElement(type);
    if(type === 'img') {
        el.src = text;
    } else if(type === 'a') {
        el.href = text.href;
        el.innerHTML = text.label;
    } else if(type === 'ol') {
        for(li of text) {
            el.innerHTML += `<li>${li.content}</li>`
        }
    } else {
        el.innerHTML = text;
    }
    el.setAttribute('class', className);
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
            content: `Eftsure is a B2B payment protection service, which we also use to streamline and protect our supplier onboarding process. Whether a threat originates from within our organisation, a supplier or a third-party organisation, Eftsure helps protect our supplier base and reduces the risk of payment error, fraud attempts and cyber-crime. Eftsure’s alert system helps us avoid paying fraudsters instead of the correct recipients, lowering your risk of delayed payment.`
        },
        {
            type: 'a',
            content: {
                label: 'Read more about Eftsure',
                href: 'https://eftsure.com/supplier-information/'
            }
        },
        {
            type: 'h3',
            content: 'We already completed the onboarding process. Do we still need to register through Eftsure?'
        },
        {
            type: 'p',
            content: `If you’re an existing partner to <b>${companyName}</b>, you might still need to register with Eftsure. This is to protect both of our organisations from risks like external cyber-crime and employee error during the payment process. Once your details are verified by Eftsure, you will not need to be re-verified with any of your other customers who use Eftsure’s solution, although other companies may choose to request additional information or documentation.`
        },
        {
            type: 'h3',
            content: 'Is it safe to share my bank account details with Eftsure?'
        },
        {
            type: 'p',
            content: 'Yes. Eftsure follows best practices for securing data and its systems. It has been vetted by numerous industry leaders and is regularly audited and penetration-tested by external security specialists.'
        }, 
        {
            type: 'a',
            content: {
                href: 'https://eftsure.com/security/',
                label: 'Read more about its security credentials'
            }
        },
        {
            type: 'h3',
            content : 'How do I securely share and verify my account details?'
        },
        {
            type: 'p',
            content: 'The communications you receive will include a link to register with Eftsure. The process asks you to submit details like your ABN, trading name and company address, as well as asking you to confirm payment information. You’ll have two options for confirming your bank account details:'
        },
        {
            type: 'ol',
            content: [
                {
                    content: '<b>Phone verification (slower):</b> Enter your account details manually. By selecting this option, you’ll receive a phone call from Eftsure to verify the provided details.'
                },
                {
                    content: '<b>Bank login (faster):</b> Select your bank from the drop-down box, then enter your bank login details. Eftsure then verifies your account details automatically, with no need to verify over the phone unless the system detects an anomaly requiring further verification.'
                }
            ]
        },
        {
            type: 'h3',
            content: "I've verified - what's next?"
        },
        {
            type: 'p',
            content: 'Now you can get paid safely.'
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const embedDiv = document.getElementById('resource-embed');
    const headerClassName = embedDiv.getAttribute('data-header-class') || ''; 
    const subHeaderClassName = embedDiv.getAttribute('data-sub-header-class') || ''; 
    const paragraphClassName = embedDiv.getAttribute('data-paragraph-class') || '';
    const imageClassName = embedDiv.getAttribute('data-image-class') || '';
    const linkClassName = embedDiv.getAttribute('data-link-class') || '';
    const listClassName = embedDiv.getAttribute('data-list-class') || '';
    const companyName = embedDiv.getAttribute('data-company-name') || 'this company';

    const getClassName = {
        h2: "default-header " + headerClassName,
        h3: "default-sub-header " + subHeaderClassName,
        p: "default-paragraph " + paragraphClassName,
        img: "default-image " + imageClassName,
        a: "default-link " + linkClassName,
        ol: "default-list " + listClassName
    }

    const content = getContent(companyName);
    for(const con of content) {
        const el = createElementWithClassName({type: con.type, text: con.content, className: getClassName[con.type]})
        embedDiv.appendChild(el);
    }
    const ctaDiv = createElementWithClassName({type: 'div', className:'cta-div', text: ''});
    embedDiv.appendChild(ctaDiv);
    const ctaElement = createElementWithClassName({type: 'a', className: 'cta-link', text: {
        href: 'https://eftsure.com',
        label: 'Visit Eftsure.com for more information'
    }});
    ctaDiv.appendChild(ctaElement);
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
        .default-header {
            margin-bottom: 1.2rem;
            font-size: x-large;
        }
        .default-sub-header {
            margin-bottom: 1.4rem;
            font-size: large;
        }
        .default-paragraph {
            margin-bottom: 1.7rem;
            line-height: 1.8;
        }
        .default-image {
            height: 54px;
            margin-block: 1.2rem;
        }
        .default-link:link, .default-link:visited {
            color: #234bff;
            display: inline-block;
            text-decoration: none;
            transition: all .3s; 
            margin-bottom: 1.7rem;
            border-bottom: 1px solid transparent;
        }
        .default-link::after {
            content: '\\2192';
            position: absolute;
            display: inline-block;
            margin-left: 5px;
            transition: all .3s;
        }
        .default-link:hover {
            border-bottom: 1px solid #234bff;
        }
        .default-link:hover::after {
            transform: translateX(10px);
        }
        .default-list li {
            line-height: 1.8;
        }
        .default-list li:not(:last-child){
            margin-bottom: 1rem;
        }
        .default-list {
            margin-bottom: 1.7rem;
        }
        .cta-div {
            display: flex;
            justify-content: center;
        }
        .cta-link {
            background: #234bff;
            color: #fff;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            display: inline-block;
            margin: 0 auto;
        }
        @media screen and (max-width:600px) {
            .default-image {
                height: 42px;
            }
        }
    `;
    document.head.append(styleEl);
});

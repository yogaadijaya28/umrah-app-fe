import React from 'react';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';


interface Props {
    htmlString: string;
}

type Alignment = 'left' | 'right' | 'center' | 'justify';

const alignmentMap: Record<Alignment, string> = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
    justify: 'text-justify'
};

const HTMLParser: React.FC<Props> = ({ htmlString }) => {
    const options: HTMLReactParserOptions = {
        replace: (node) => {
            if ('type' in node && 'name' in node && node.type === 'tag' && node.name === 'ul') {
                return (
                    <ul className="list-disc ml-5 text-base text-black font-epilogue">
                        {domToReact(node.children, { ...options })}
                    </ul>
                );
            }
       
            if ('type' in node && 'name' in node && node.type === 'tag' && node.name === 'ol') {
               
                let parentNode = node.parent;
                while (parentNode && parentNode.type !== 'tag') {
                    parentNode = parentNode.parent;
                }
    
                if (parentNode && parentNode.name === 'li') {
                    return (
                        <ol className="list-lower-latin ml-5 text-base text-black font-epilogue mt-3">
                            {domToReact(node.children, { ...options })}
                        </ol>
                    );
                } else {
                    return (
                        <ol className="list-decimal ml-5 text-base text-black font-epilogue mt-3">
                            {domToReact(node.children, { ...options })}
                        </ol>
                    );
                }
            }

            if ('type' in node && 'name' in node && node.type === 'tag' && node.name === 'li') {
                return (
                    <li className="my-3">
                        {domToReact(node.children, { ...options })}
                    </li>
                );
            }
          
            
            if ('type' in node && 'name' in node && node.type === 'tag' && node.name === 'blockquote') {
                return (
                    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        <p className="mb-3 italic">

                        {domToReact(node.children, { ...options })}
                        </p>
                    </blockquote>
                );
            }

        
            
            if (
                'type' in node &&
                'name' in node &&
                node.type === 'tag' &&
                node.name === 'p'
            ) {
                const alignment = node.attribs && node.attribs.style
                    ? (node.attribs.style.match(/text-align:\s*(\w+)/) || [])[1]
                    : '';
                const validAlignment: Alignment = alignment as Alignment;
                const paragraphClassName = `mb-3 ${alignmentMap[validAlignment] || ''}`;
            
                return (
                    <p className={paragraphClassName}>
                        {domToReact(node.children, {
                            ...options,
                            replace: (domNode:any) => {
                                if (domNode.type === 'tag' && domNode.name === 'a') {
                                    return (
                                        <a className="text-blue-500" {...domNode.attribs}>
                                            {domToReact(domNode.children, options)}
                                        </a>
                                    );
                                }
                            },
                        })}
                    </p>
                );
            }
            

            // if (
            //     'type' in node &&
            //     'name' in node &&
            //     node.type === 'tag' &&
            //     node.name === 'p'
            // ) {
            //     const alignment = node.attribs && node.attribs.style
            //         ? (node.attribs.style.match(/text-align:\s*(\w+)/) || [])[1]
            //         : '';

            //     const validAlignment: Alignment = alignment as Alignment;

            //     const paragraphClassName = `mb-3 ${alignmentMap[validAlignment] || ''}`;


            //     return (
            //         <p className={paragraphClassName}>
            //             {domToReact(node.children, { ...options })}
            //         </p>
            //     );
            // }




            return node;
        }
    };

    const parsedHTML = parse(htmlString, { ...options });

    return <>{parsedHTML}</>;
};

export default HTMLParser;

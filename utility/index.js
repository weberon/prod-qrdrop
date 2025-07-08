
const getExistingHomePage = (source) => {
    let first = `${source}`.split('/').filter(s => s.trim() !== '')[0];
    console.log({first});
    if(!isFile(first)){
        return first;
    }
    return undefined;
}

const isFile = (str) => {
    return str.split('.').length > 1;
}

const getLinkWithDomain = (link, domain) => {
    const homePage = getExistingHomePage(link);
    let link2 = `/${domain}/${link}`;
    if(homePage != null){
        link2 = link.replace(homePage, domain);
    }
    const links = link2.split('/').filter(l => l != "");
    const links3 = links.join('/');    
    return links.length > 0 ? `/${links3}`: links3;
}

module.exports.getLinkWithDomain = getLinkWithDomain;
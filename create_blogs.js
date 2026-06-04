const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'client', 'src');

const blogs = [
  {
    dir: 'blogPage14',
    pageName: 'MancoraBeginnerPage',
    slug: 'learn-kitesurfing-in-peru-mancora-beginner-guide',
    title: "Learn Kitesurfing in Peru: The Complete Beginner's Guide to Mancora",
    heroPrefix: 'MancoraBeginner',
  },
  {
    dir: 'blogPage15',
    pageName: 'WingfoilComparisonPage',
    slug: 'kitesurf-vs-wingfoil-which-watersport-should-you-learn',
    title: "Kitesurf vs Wingfoil: Which Watersport Should You Learn?",
    heroPrefix: 'WingfoilComparison',
  },
  {
    dir: 'blogPage16',
    pageName: 'IKOCertificationPage',
    slug: 'iko-certified-kitesurfing-school-why-it-matters',
    title: "IKO Certified Kitesurfing School: What It Means and Why It Matters",
    heroPrefix: 'IKOCertification',
  }
];

blogs.forEach(blog => {
  const sectionsDir = path.join(srcDir, 'sections', blog.dir);
  fs.mkdirSync(sectionsDir, { recursive: true });

  // 1. Hero
  const heroContent = `import { getPremiumBlogPostBySlug } from '../../../data/posts.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"

function Hero${blog.heroPrefix}() {
  const post = getPremiumBlogPostBySlug('${blog.slug}')
  return (
    <FullscreenHero
      as="section"
      eyebrow={post.category}
      title={post.title}
      subtitle={post.excerpt}
      slides={[
        {
          desktopSrc: post.heroImage,
          mobileSrc: post.mobileImage || post.heroImage,
          alt: post.heroAlt || post.title,
          imageClassName: 'object-cover',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}
export default Hero${blog.heroPrefix}
`;
  fs.writeFileSync(path.join(sectionsDir, `Hero${blog.heroPrefix}.jsx`), heroContent);

  // 2. Intro
  const introContent = `import { getPremiumBlogPostBySlug } from '../../../data/posts.js'
import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"

function Intro${blog.heroPrefix}() {
  const post = getPremiumBlogPostBySlug('${blog.slug}')
  return (
    <ArticleIntroBase
      eyebrow="Introduction"
      title={post.title}
      paragraphs={post.intro || []}
      quote=""
      images={post.gallery?.slice(0, 2).map((img) => ({
        src: img.src,
        alt: img.alt,
        caption: img.alt,
      })) || []}
    />
  )
}
export default Intro${blog.heroPrefix}
`;
  fs.writeFileSync(path.join(sectionsDir, `Intro${blog.heroPrefix}.jsx`), introContent);

  // 3. Scroller
  const scrollerContent = `import { getPremiumBlogPostBySlug } from '../../../data/posts.js'
import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"

function ${blog.heroPrefix}Scroller() {
  const post = getPremiumBlogPostBySlug('${blog.slug}')
  
  const sections = post.sections?.map((sec, index) => ({
    eyebrow: sec.title.split(' ')[0],
    title: sec.title,
    paragraphs: sec.paragraphs,
    bullets: sec.bullets,
    facts: sec.comparison ? sec.comparison.rows.map(row => ({ label: row[0], value: row[1] })) : [],
    image: post.gallery?.[(index * 2) % post.gallery.length]?.src,
    imageAlt: post.gallery?.[(index * 2) % post.gallery.length]?.alt,
    caption: sec.bulletsTitle || "",
    supportImage: post.gallery?.[(index * 2 + 1) % post.gallery.length]?.src,
    supportAlt: post.gallery?.[(index * 2 + 1) % post.gallery.length]?.alt,
    supportCaption: "",
  })) || []

  return (
    <ArticleScrollerBase
      eyebrow="Deep Dive"
      title="Exploring the Details"
      description="Read further to understand more about this topic."
      sections={sections}
    />
  )
}
export default ${blog.heroPrefix}Scroller
`;
  fs.writeFileSync(path.join(sectionsDir, `${blog.heroPrefix}Scroller.jsx`), scrollerContent);

  // 4. CTA
  const ctaContent = `import { getPremiumBlogPostBySlug } from '../../../data/posts.js'
import ArticleCTABase from "../../blogShared/ArticleCTABase.jsx"

function ${blog.heroPrefix}CallToAction() {
  const post = getPremiumBlogPostBySlug('${blog.slug}')
  return (
    <ArticleCTABase
      title={post.cta?.title || "Ready for your adventure?"}
      subtitle={post.cta?.body || "Join us in Mancora."}
      primaryBtnText="Build Trip"
      primaryBtnHref="/build"
      secondaryBtnText="Contact Us"
      secondaryBtnHref="/contact"
    />
  )
}
export default ${blog.heroPrefix}CallToAction
`;
  fs.writeFileSync(path.join(sectionsDir, `${blog.heroPrefix}CallToAction.jsx`), ctaContent);

  // 5. Page
  const pageContent = `import SEO from "../../components/SEO.jsx"
import SchemaOrg from "../../components/SchemaOrg.jsx"
import { getPremiumBlogPostBySlug } from '../../data/posts.js'
import Hero${blog.heroPrefix} from "../../sections/${blog.dir}/Hero${blog.heroPrefix}.jsx"
import Intro${blog.heroPrefix} from "../../sections/${blog.dir}/Intro${blog.heroPrefix}.jsx"
import ${blog.heroPrefix}Scroller from "../../sections/${blog.dir}/${blog.heroPrefix}Scroller.jsx"
import ${blog.heroPrefix}CallToAction from "../../sections/${blog.dir}/${blog.heroPrefix}CallToAction.jsx"

function ${blog.pageName}() {
  const post = getPremiumBlogPostBySlug('${blog.slug}')
  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.description}
        canonicalPath={\`/blog/\${post.slug}\`}
        hreflang={{ en: "/", es: "/esp", default: "/" }}
      />
      <SchemaOrg type="BlogPosting" post={post} />

      <Hero${blog.heroPrefix} />
      <Intro${blog.heroPrefix} />
      <${blog.heroPrefix}Scroller />
      <${blog.heroPrefix}CallToAction />
    </>
  )
}

export default ${blog.pageName}
`;
  fs.writeFileSync(path.join(srcDir, 'pages', 'blog', `${blog.pageName}.jsx`), pageContent);
});

console.log("Successfully created all legacy structure blog components.");

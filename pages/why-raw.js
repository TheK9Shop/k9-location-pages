import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const IMG_WHAT_DOGS_EAT = 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/raw-pet-food-What-should-dogs-be-eating.webp';
const IMG_SKIN_COAT = 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/Skin-and-coat-improvements-new.webp';

const Label = ({ children }) => (
  <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.2em', color: '#C0392B', textTransform: 'uppercase', marginBottom: 12 }}>
    {children}
  </div>
);

const H2 = ({ children }) => (
  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: '#1A1A1A', lineHeight: 1.15, margin: '0 0 24px 0' }}>
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 style={{ fontSize: 20, fontWeight: 900, color: '#1A1A1A', margin: '40px 0 14px 0' }}>{children}</h3>
);

const P = ({ children }) => (
  <p style={{ fontSize: 16, lineHeight: 1.75, color: '#444', margin: '0 0 18px 0' }}>{children}</p>
);

const Block = ({ children, alt }) => (
  <section style={{ background: alt ? '#F9F9F7' : '#FFFFFF', padding: '80px 40px' }}>
    <div style={{ maxWidth: 900, margin: '0 auto' }}>{children}</div>
  </section>
);

export default function WhyRaw() {
  return (
    <>
      <Head>
        <title>Why Raw Pet Food? | The K9 Shop</title>
        <meta
          name="description"
          content="Discover the benefits of feeding your dog raw food, from dental health and skin and coat to energy, digestion, and fewer vet visits."
        />
      </Head>

      <SiteNav />

      <Block>
        <Label>Why Raw?</Label>
        <H2>Why Raw Pet Food?</H2>
        <div>
          <img
            src={IMG_WHAT_DOGS_EAT}
            alt="A raw meal for a dog"
            style={{ float: 'right', width: '35%', maxWidth: 300, minWidth: 160, height: 'auto', borderRadius: 8, margin: '0 0 16px 28px' }}
          />
          <P>
            Raw dog food is species appropriate and provides numerous health benefits. Dogs are carnivores, so they should eat a diet of predominantly meat.
          </P>
          <P>
            Equally important, it should be raw. Animals don't cook their foods. Your dog needs raw muscle meat, organs, fatty tissue, and bones.
          </P>
        </div>
      </Block>

      <Block alt>
        <Label>The Basics</Label>
        <H2>What Should Dogs Be Eating?</H2>
        <P>
          Dogs are carnivores. They should eat a diet of predominantly meat, and it should be raw, with muscle meat, organs, fatty tissue, and bones.
        </P>

        <H3>What Shouldn't Dogs Be Eating?</H3>
        <P>
          <strong>Carbohydrates:</strong> Carbs may be nutritious for omnivores and herbivores, but carnivores don't benefit from these nutrients in the same way we do. Fruits and vegetables aren't bad, and they won't harm your dog. The problem is that dogs digest them too quickly to absorb the vital nutrients they need.
        </P>
        <P>
          <strong>Cooked foods:</strong> Dogs are meant to eat raw foods. They have the digestive system, stomach acid, and bacteria-killing agents to handle them. Cooking destroys the vitamin, mineral, and enzyme content that's needed. Cooked bones are also more likely to splinter and cause hazards.
        </P>
        <P>
          <strong>Processed foods:</strong> Processed foods are unhealthy and aren't good for any living animal. They are poor nutrition at best.
        </P>
      </Block>

      <Block>
        <Label>Dental Health</Label>
        <H2>Dental Benefits</H2>
        <P>
          Dogs fed commercial pet food often have poor dental hygiene. Starchy ingredients cause tartar buildup, which leads to dental disease. Dental disease can cause abscessed roots and teeth that need to be extracted, along with infections that spread elsewhere in the body. Dental procedures are costly for most pet owners.
        </P>
        <P>
          Look at wild wolves and dogs. They don't brush their teeth and still stay free of tartar buildup. They eat their natural diet.
        </P>
        <P>
          A raw-fed dog gets a thorough tooth cleaning every time it rips, shreds, and crunches down on bones. Grinding bones scrapes away plaque and tartar, so your dog can keep healthy teeth without extra brushing, dental chews, or vet visits for cleanings.
        </P>
      </Block>

      <Block alt>
        <Label>The Improvements</Label>
        <H2>What Raw Feeding Can Improve</H2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
          <div style={{ flex: '1 1 320px' }}>
            <H3>Skin and Coat</H3>
            <P>
              Many raw-fed owners notice healthier skin and a shinier coat as the diet improves how their dog digests and absorbs nutrients.
            </P>
          </div>
          <div style={{ flex: '0 1 50%', minWidth: 260 }}>
            <img
              src={IMG_SKIN_COAT}
              alt="Skin and coat improvements on a raw diet"
              style={{ width: '100%', height: 'auto', borderRadius: 8, display: 'block' }}
            />
          </div>
        </div>

        <H3>Energy and Vitality</H3>
        <P>
          Many raw-fed owners report more energy and vitality after switching to raw. Some describe older dogs acting like puppies again.
        </P>

        <H3>Mental and Physical Exercise</H3>
        <P>
          Ripping, shredding, and tearing muscle meat and crushing bones work out the jaw and neck muscles. Raw-fed dogs often tire after mealtime and settle down easily. Chewing and tearing apart meat also releases endorphins, so dogs are less likely to act out from boredom.
        </P>

        <H3>Stool Improvements</H3>
        <P>
          Raw-fed dogs usually go less often, and each bowel movement is smaller. Their stools are firmer, less odorous, and dry to a white, crumbly texture, which makes cleanup easier. Less waste means the dog is making better use of its food.
        </P>

        <H3>Fewer Vet Visits</H3>
        <P>
          The main benefit of raw feeding is a healthier, happier dog. When a dog absorbs all the nutrients from its food, its immune, digestive, and other systems get stronger. Over time, that means less veterinary care and a lower risk of serious disease as the dog ages.
        </P>
      </Block>

      <Block>
        <div style={{ textAlign: 'center' }}>
          <Label>Ready to Start?</Label>
          <H2>Find Your Nearest K9 Shop</H2>
          <P>Visit one of our seven locations to talk with our team about raw feeding for your dog.</P>
          <a
            href="https://k9-location-pages.vercel.app/"
            style={{
              display: 'inline-block', background: '#C0392B', color: '#FFF', padding: '14px 32px',
              borderRadius: 4, textDecoration: 'none', fontWeight: 900, fontSize: 13,
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}
          >
            View All Locations
          </a>
        </div>
      </Block>

      <SiteFooter />
    </>
  );
}
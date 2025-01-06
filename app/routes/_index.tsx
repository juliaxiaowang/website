import type { MetaFunction } from "@remix-run/node";
import { Container } from "~/components/layout/Container";
import { StackLayout } from "~/components/layout/Stack";
import { PreviewItem } from "~/components/PreviewItem";
import { Section } from "~/components/layout/Section";

export const meta: MetaFunction = () => {
  return [{ title: "Julia Wang" }];
};

export default function Index() {
  return (
    <div>
      <Section>
        <Container>
          <div>
            <h1 className="neue-bit-heading">
              <p>julia is... </p>
              <p>crafting interfaces</p>
              <p>doing art</p>
              <p>curating lists</p>
              <p>learning</p>
              <p>wandering earth</p>
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <p>
              In pursuit of great interfaces. Building artifacts, places, and
              experiences on the internet. Webmaster and design engineer at{" "}
              <a
                href="https://www.applied.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Applied Intuition
              </a>
              .
            </p>
            <p>
              In the past I’ve built tools to help track global methane
              emissions at{" "}
              <a
                href="https://www.methanesat.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MethaneSAT
              </a>
              .
            </p>
          </div>
          <StackLayout>
            <div>
              <h2 className="neue-bit-label">Current</h2>
              <div className="flex flex-col gap-4">
                <PreviewItem
                  href="applied.co"
                  title="Book tracking website"
                  description="Because we all need to see another version of Goodreads"
                />
                <PreviewItem
                  href="applied.co"
                  title="Digital Cookbook"
                  description="A digital editorial cookbook to collect all recipes I've made"
                />
              </div>
            </div>
            <div>
              <h2 className="neue-bit-label">Previous</h2>
              <div className="flex flex-col gap-4">
                <PreviewItem
                  href="https://github.com/juliawang18/sunday-sketches"
                  isLinked={true}
                  title="Sunday Sketches"
                  description="A public weekly sketching challenge, inspired by Christoph Niemann"
                />
                <PreviewItem
                  href="https://edrl.berkeley.edu/projects/balance-board-math/"
                  isLinked={true}
                  title="Balance Board Math"
                  description="Tools that help students learn math through movement rather than textbooks"
                />
                <PreviewItem
                  href="https://dl.acm.org/doi/10.1145/3491101.3519800"
                  isLinked={true}
                  title="苦口 (Kǔ Kǒu) Box"
                  description="An exploration of a subjective take on personal informatics"
                />
                <PreviewItem
                  href="applied.co"
                  title="to a fellow human,"
                  description="An interactive art installation"
                />
              </div>
            </div>
          </StackLayout>
          <div className="flex flex-col gap-8">
            <p>
              Some things that make my heart skip a beat: dense scones, produce
              aisles in the grocery store, the philosophy of cybernetics,
              unravelling how interfaces affect our mental models, small gadgets
              and gizmos, hobonichi planners, playing mahjong until 4AM, cooking
              good food for people I love, eating really good food, listening to
              people talk about what they love, long debates on technology and
              creativity, and brain dumping on a large piece of butcher paper.
            </p>
            <p>
              Reach out to me via{" "}
              <a href="mailto:juliaxiaowang@gmail.com">email</a>.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}

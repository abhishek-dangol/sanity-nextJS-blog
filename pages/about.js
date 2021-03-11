import Head from "next/head";
import PageLayout from "components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <Head>
        <title>About</title>
      </Head>

      <main className="mx-auto">
        <h1>About this blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          maximus erat ac nisi cursus, nec euismod diam tristique. Fusce eros
          mi, pulvinar et hendrerit vitae, sollicitudin eu ligula. Mauris
          pretium, est vitae aliquet ultrices, tellus risus posuere massa, non
          venenatis arcu augue malesuada nisl. Nulla bibendum eget quam non
          convallis. Sed sodales massa a sapien euismod scelerisque.
          Pellentesque tempor lacinia faucibus. Suspendisse eu molestie felis.
          Aenean porta eros ac urna feugiat, a viverra tortor semper. Fusce
          porttitor suscipit nunc in viverra. Mauris id pretium erat. Phasellus
          tincidunt ligula quis ultrices feugiat. Sed lobortis convallis eros.
          Maecenas efficitur lacinia nibh sed volutpat. Integer convallis
          facilisis lacinia. Sed nec varius mauris. Donec magna lorem, hendrerit
          id tempor tempor, pretium ut tortor. Pellentesque metus ligula,
          efficitur ac pulvinar nec, ultricies vitae erat. Curabitur fringilla
          ut purus quis bibendum. Nullam non mauris sem. Ut ex dolor, luctus
          convallis diam quis, vestibulum dignissim arcu. In mattis vitae urna a
          volutpat. Cras at laoreet quam. Fusce tempus finibus egestas. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vivamus a ipsum a urna euismod lacinia rutrum vel
          metus. Nunc sit amet dapibus ipsum. Nullam facilisis, ligula sit amet
          tristique hendrerit, urna turpis pellentesque nibh, quis feugiat
          sapien sapien eget est. Donec dapibus venenatis dignissim. In cursus
          leo eget vestibulum cursus. Nam viverra risus ac enim eleifend
          aliquet. Sed tempus erat quis lacus auctor accumsan. Phasellus purus
          erat, auctor ut risus a, consequat dapibus leo. Nam sollicitudin vitae
          neque eu tincidunt. Proin accumsan malesuada velit eu hendrerit.
          Maecenas et odio imperdiet, rhoncus eros eget, porttitor nunc. Ut
          placerat urna vitae leo interdum, et viverra mi euismod. Pellentesque
          molestie feugiat velit et viverra. Phasellus ultrices a libero et
          feugiat. Sed pharetra ultricies sapien ut ullamcorper. Ut ultrices,
          metus et lacinia tristique, mi quam aliquam massa, ac facilisis velit
          tellus a felis. Vestibulum eros ante, fermentum at dapibus sed,
          maximus ut elit. Fusce at felis scelerisque, interdum odio eu, varius
          nisi.
        </p>
      </main>
    </PageLayout>
  );
}

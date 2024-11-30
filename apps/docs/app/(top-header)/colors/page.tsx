import Link from "next/link";
import colors from "tailwindcss/colors";

// filter out current, inherit, transparent but tell about it
// get an object of all the values,
// based on the value pass it in to the object, get all the keys turn them into an array to loop into
//

const filteredDeprecated = [
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray ",
];

const filteredGlobals = [
  "current",
  "inherit",
  "transparent",
  ...filteredDeprecated,
];

type Colors = {
  [color: string]: {
    [shade: string]: string;
  };
};

// first structure attempt  Array<{[color]: Array<Record<[50,100,200]: #hexcode>>}>
// const mappedColors: Array<{
//   [key in keyof typeof Colors]?: Array<Record<string, string> | string>;
// }> = [];
//
// for (const color in colors) {
//   if (filteredGlobals.includes(color)) {
//     continue;
//   }
//
//   const mappedShades: Array<{ [shade: string]: string }> = [];
//   const shades = colors[color as keyof typeof Colors];
//
//   if (typeof shades === "string") {
//     mappedShades.push(shades);
//   }
//   // Ensure TypeScript knows `shades` is an object with string keys
//   if (typeof shades === "object") {
//     for (const shade in shades as Record<string, string>) {
//       mappedShades.push({ [shade]: (shades as Record<string, string>)[shade] });
//     }
//   }
//
//   const newColor = { [color]: mappedShades };
//   mappedColors.push(newColor);
// }

// second structure attempt Array<{color: string, shades: Array<{name: string, value: string}>}>
// its easier because we can more easily iterate the color
const simplifiedColors: Array<{
  color: string; // The color name
  shades: Array<Record<string, string>>; // Shades as uniform objects
}> = [];

for (const color in colors) {
  if (filteredGlobals.includes(color)) {
    continue;
  }

  const shades = colors[color as keyof typeof Colors];
  const mappedShades = [];

  if (typeof shades === "string") {
    mappedShades.push({ name: "default", value: shades });
    continue;
  }
  if (typeof shades === "object") {
    for (const shade in shades as Record<string, string>) {
      mappedShades.push({ name: shade, value: shades[shade] });
    }
  }

  simplifiedColors.push({ color, shades: mappedShades });
}

export default function Colors() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl">Colors</h1>
      <p>
        Chameleon Kit uses TailwindCSS colors under the hood.{" "}
        <Link href="https://tailwindcss.com/docs/customizing-colors">
          Tailwind Customizing Colors
        </Link>
      </p>
      {simplifiedColors.length > 0 ? (
        <ul className="my-10 grid grid-cols-3 md:grid-cols-1 gap-y-16 gap-x-6 md:gap-x-2 md:gap-y-16">
          {simplifiedColors.map(({ color, shades }) => {
            return (
              <li key={color}>
                <h2 className="text-xl mb-2">
                  {color.charAt(0).toUpperCase() + color.substring(1)}
                </h2>
                {shades ? (
                  <ul className="grid grid-cols-1 md:grid-cols-11 gap-2">
                    {shades.map(({ name, value }) => {
                      return (
                        <li key={`${name}-${value}`}>
                          <span
                            style={{ backgroundColor: value }}
                            className={`block aspect-square rounded-xl border-2 border-black w-full`}
                          />
                          {name}: {value}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
}

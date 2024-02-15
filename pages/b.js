export const ImageContainer = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Image src="/react-color.svg" alt="react.js" width={50} height={50} />
        <p>react.js</p>
      </div>
      <div>
        <Image
          src="/javascript-color.svg"
          alt="javascript"
          width={50}
          height={50}
        />
        <p>Javascript</p>
      </div>
      <div>
        {" "}
        <Image
          src="/nodedotjs-color.svg"
          alt="Node.js"
          width={50}
          height={50}
        />
        <p>Node.js</p>
      </div>
      <div>
        <Image
          src="/postgresql-color.svg"
          alt="postgresql"
          width={50}
          height={50}
        />
        <p>Postgresql</p>
      </div>
      <div>
        <Image
          src="/tailwindcss-color.svg"
          alt="tailwindcss"
          width={50}
          height={50}
        />
        <p>Tailwindcss</p>
      </div>
      <div>
        {" "}
        <Image
          src="/typescript-color.svg"
          alt="Typescript"
          width={50}
          height={50}
        />
        <p>Typescript</p>
      </div>

      <div>
        {" "}
        <Image src="/express-color.svg" alt="Express" width={50} height={50} />
        <p>Express</p>
      </div>
      <div>
        <Image src="/python-color.svg" alt="Python" width={50} height={50} />
        <p>Python</p>
      </div>
      <div>
        {" "}
        <Image src="/flask-color.svg" alt="Flask" width={50} height={50} />
        <p>Flask</p>
      </div>
    </div>
  );
};

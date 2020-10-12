import Layout from '../components/Layout'

const Policy = ({ data }) => {
  return (
    <Layout>
      <div className="policy">
        <div className="container">
          <h1>Skilmálar</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consectetur lacus eu diam dignissim finibus. Mauris diam enim,
            efficitur ac facilisis ut, cursus a tellus. Praesent eu odio
            consectetur, consectetur risus vel, hendrerit purus. Quisque dolor
            lorem, imperdiet eget metus id, maximus varius velit. Quisque sed
            imperdiet nisi, vitae gravida leo. Donec eget vestibulum eros, sed
            gravida diam. Curabitur auctor, tellus a ultrices auctor, odio arcu
            interdum purus, sit amet porta magna purus quis metus. Pellentesque
            sed blandit justo. Phasellus lobortis iaculis dictum. Duis dignissim
            tempus tellus, pulvinar tincidunt felis. Praesent eleifend magna in
            tortor faucibus auctor quis in nibh.
          </p>
          <p>
            Vivamus cursus blandit sollicitudin. Maecenas sit amet lacus congue,
            elementum nisl eu, imperdiet nisi. Fusce efficitur nunc vel neque
            rutrum ornare. Duis ut purus sed ligula elementum ullamcorper ac
            quis enim. Suspendisse facilisis vehicula consequat. Cras id
            vestibulum felis. Sed dignissim faucibus nisl, et iaculis tellus
            mattis feugiat. In hac habitasse platea dictumst. Maecenas lacus
            diam, vestibulum ac tincidunt et, lobortis et tellus. Curabitur id
            vulputate tortor, non euismod massa. Proin non tempor libero,
            eleifend tristique dolor. Suspendisse rhoncus, ante quis volutpat
            cursus, arcu ante fermentum dui, eu sodales nulla tellus vestibulum
            tortor. Nunc nec gravida ex. Curabitur lobortis vitae turpis vel
            eleifend. Suspendisse est dolor, lobortis eu mauris et, pulvinar
            dictum diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consectetur lacus eu diam dignissim finibus. Mauris diam enim,
            efficitur ac facilisis ut, cursus a tellus. Praesent eu odio
            consectetur, consectetur risus vel, hendrerit purus. Quisque dolor
            lorem, imperdiet eget metus id, maximus varius velit. Quisque sed
            imperdiet nisi, vitae gravida leo. Donec eget vestibulum eros, sed
            gravida diam. Curabitur auctor, tellus a ultrices auctor, odio arcu
            interdum purus, sit amet porta magna purus quis metus. Pellentesque
            sed blandit justo. Phasellus lobortis iaculis dictum. Duis dignissim
            tempus tellus, pulvinar tincidunt felis. Praesent eleifend magna in
            tortor faucibus auctor quis in nibh.
          </p>
          <p>
            Vivamus cursus blandit sollicitudin. Maecenas sit amet lacus congue,
            elementum nisl eu, imperdiet nisi. Fusce efficitur nunc vel neque
            rutrum ornare. Duis ut purus sed ligula elementum ullamcorper ac
            quis enim. Suspendisse facilisis vehicula consequat. Cras id
            vestibulum felis. Sed dignissim faucibus nisl, et iaculis tellus
            mattis feugiat. In hac habitasse platea dictumst. Maecenas lacus
            diam, vestibulum ac tincidunt et, lobortis et tellus. Curabitur id
            vulputate tortor, non euismod massa. Proin non tempor libero,
            eleifend tristique dolor. Suspendisse rhoncus, ante quis volutpat
            cursus, arcu ante fermentum dui, eu sodales nulla tellus vestibulum
            tortor. Nunc nec gravida ex. Curabitur lobortis vitae turpis vel
            eleifend. Suspendisse est dolor, lobortis eu mauris et, pulvinar
            dictum diam.
          </p>
        </div>
        {/* .container */}
      </div>
      {/* .policy */}
      <style jsx>{`
        .policy {
          padding: 235px 0 110px;
          @media (max-width: 991px) {
            padding: 109px 0 80px;
          }
          @media (max-width: 991px) {
            padding: 90px 0 80px;
          }
          .container {
            max-width: 860px;
          }
          h1 {
            font-family: 'GT America Bold';
            font-size: 64px;
            letter-spacing: 0em;
            text-align: left;
            margin-bottom: 70px;
            color: #204f9c;
            @media (max-width: 991px) {
              font-size: 48px;
              margin-bottom: 40px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
              margin-bottom: 30px;
            }
          }
          p {
            font-family: 'GT America Regular';
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            line-height: 32px;
            letter-spacing: 0em;
            text-align: left;
            color: #202020;
            margin-bottom: 2em;
            @media (max-width: 991px) {
              font-size: 18px;
              line-height: 22px;
            }
            @media (max-width: 767px) {
              font-size: 16px;
              line-height: 18px;
            }
          }
        }
      `}</style>
    </Layout>
  )
}

export default Policy

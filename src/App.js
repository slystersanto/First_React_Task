
import './App.css';



function App() {
  const data = [{
    plan: "free",
    price: "$0",
    features: [
      {
        title: "Single User",
        correct: true
      },
      {
        title: "5GB Storage",
        correct: true
      },
      {
        title: "Unlimited Public Projects",
        correct: true
      },
      {
        title: "Community Access",
        correct: true
      },
      {
        title: "Unlimited Private Projects",
        correct: false
      },
      {
        title: "Dedicated Phone Support",
        correct: false
      },
      {
        title: "Free Subdomain",
        correct: false
      },
      {
        title: "Monthly Status Reports",
        correct: false
      }
    ]
  },
  {
    plan: "PLUS",
    price: "$9",
    features: [
      {
        title: "5 Users",
        correct: true,
        highlight: true
      },
      {
        title: "50GB Storage",
        correct: true
      },
      {
        title: "Unlimited Public Projects",
        correct: true
      },
      {
        title: "Community Access",
        correct: true
      },
      {
        title: "Unlimited Private Projects",
        correct: true
      },
      {
        title: "Dedicated Phone Support",
        correct: true
      },
      {
        title: "Free Subdomain",
        correct: true
      },
      {
        title: "Monthly Status Reports",
        correct: false
      }
    ]
  },
  {
    plan: "PRO",
    price: "$49",
    features: [
      {
        title: "Unlimited Users",
        correct: true,
        highlight: true
      },
      {
        title: "150GB Storage",
        correct: true
      },
      {
        title: "Unlimited Public Projects",
        correct: true
      },
      {
        title: "Community Access",
        correct: true
      },
      {
        title: "Unlimited Private Projects",
        correct: true
      },
      {
        title: "Dedicated Phone Support",
        correct: true
      },
      {
        title: "Unlimited Free Subdomains",
        correct: true
      },
      {
        title: "Monthly Status Reports",
        correct: true
      }
    ]
  }
  ];

  return (
    <div className="App">
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {data.map((ele) => {
              return <Card card={ele} />
            })}

          </div>
        </div>
      </section>
    </div>
  );
}
function Card({ card }) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{card.plan}</h5>
          <h6 class="card-price text-center">{card.price}<span class="period">/month</span></h6>
          <hr />
          <ul class="fa-ul">
            {card.features.map((item) => {

              return <li class={item.correct ? "" : "text-muted"}><span class="fa-li"><i class={item.correct ? "fas fa-check" : "fas fa-times"}></i></span>{item.highlight ? <strong>{item.title}</strong> : <span>{item.title}</span>}</li>
            }
            )}
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
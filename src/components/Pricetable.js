import React from 'react';
import './_Pricetable.scss';

const Pricetable = props => {
    return (
        <div class="container">

            <div class="plan">
                <div class="plan__body">
                    <div class="plan__title">
                        Economy
      </div>
                    <div class="plan__price">
                        $5.99 <span class="month">/mo</span>
                    </div>
                    <div>
                        <button>
                            Add to Cart
        </button>
                    </div>
                </div>
                <div class="plan__items">
                    <ul>
                        <li>
                            Standard Performance
        </li>
                        <li>
                            1 website
        </li>
                        <li>
                            100 GB storage
        </li>
                        <li>
                            10 databases
        </li>
                        <li>
                            Unmetered bandwidth
        </li>
                    </ul>
                </div>
            </div>

            <div class="plan popular">
                <div class="plan__body">

                    <div class="plan__title">
                        Deluxe
      </div>
                    <div class="plan__price">
                        $7.99 <span class="month">/mo</span>
                    </div>
                    <div>
                        <button>
                            Add to Cart
        </button>
                    </div>
                </div>
                <div class="plan__items">
                    <ul>
                        <li>
                            <span class="bold">Standard</span> Performance
        </li>
                        <li>
                            <span class="bold"> 50</span>  website
        </li>
                        <li>
                            <span class="bold">Unlimited</span>  GB storage
        </li>
                        <li>
                            <span class="bold">25</span> databases
        </li>
                        <li>
                            <span class="bold">Unmetered</span>  bandwidth
        </li>
                    </ul>
                </div>
            </div>

            <div class="plan">
                <div class="plan__body">
                    <div class="plan__title">
                        Ultimate
      </div>
                    <div class="plan__price">
                        $12.99 <span class="month">/mo</span>
                    </div>
                    <div>
                        <button>
                            Add to Cart
        </button>
                    </div>
                </div>
                <div class="plan__items">
                    <ul>
                        <li>
                            Increased processing power
        </li>
                        <li>
                            Unlimited website
        </li>
                        <li>
                            Unlimited storage
        </li>
                        <li>
                            Unlimited  databases
        </li>
                        <li>
                            Unmetered bandwidth
        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};
export default Pricetable;

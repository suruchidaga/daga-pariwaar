import styled from "styled-components";
import WithDirection from "@lib/helpers/rtl";

const FamilyDetailsWrapper = styled.div`
  padding: 15px;

  *:focus {
    outline: none;
  }
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
  img {
    width: 100%;
  }
  .wrapper {
    width: 98%;
    margin: 0 auto;
  }
  .card-grid {
    margin: 2em 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 48px;
  }
  .card {
    background-color: hsl(0, 0%, 100%);
    padding: 0px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      transform: scale(1.1);
      .card-content {
        h2 {
          display: block;
          -webkit-line-clamp: none;
          -webkit-box-orient: none;
          overflow: visible;
        }
      }
    }
  }
  .card-image {
    max-height: 150px;
    overflow: hidden;
  }
  .card-image img {
    margin-top: -13px;
    min-height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .card-content {
    padding: 32px 15px;

    h3 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .card-list {
    margin-top: 16px;

    li {
      color: hsl(200, 15%, 8%);
      margin-top: 8px;

      span {
        color: hsl(0, 0%, 52%);
      }
    }
  }

  /* search input */
  .search-wrapper {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 375px) {
    .search-input {
      width: 100%;
    }
    .search-wrapper {
      justify-content: start;
      flex-wrap: wrap;
    }
    .select {
      margin-top: 3.5em;
    }
  }

  .search-input {
    width: 100%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==");
    background-color: hsl(0, 0%, 100%);
    background-size: 16px 16px;
    background-position: left 10px center;
    background-repeat: no-repeat;
    padding: 1.4em 2em;
    padding-left: 2.7em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: hsl(0, 0%, 52%);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
    }

    &:focus-visible {
      outline: none;
    }
  }

  .css-fix {
    white-space: pre-wrap;
  }

  .full-control {
  margin-top: -1em;
}

.full-control .toggles label:first-of-type {
  margin-right: 1.5em;
}

.full-control .toggles input {
  margin-left: .5em;
}

.full-control .volume,
.full-control .seek {
  margin-bottom: .5em;
}

.full-control .volume .slider-container,
.full-control .seek .slider-container {
  margin: auto .5em;
}

.slider-container input {
  vertical-align: bottom;
}

.rate {
  margin-bottom: 0.5em;
}
`;

export default WithDirection(FamilyDetailsWrapper);

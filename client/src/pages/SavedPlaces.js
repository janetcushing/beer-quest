import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
// import { hasBeenThere } from "../utils/hasbeenthereapi";
import { Link } from "react-router-dom";
import { SavedListItem, SavedList } from "../components/SavedPlacesList";
import Clear from 'material-ui/svg-icons/content/clear';
import { Card, CardActions, CardTitle
  // , CardText, CardHeader 
} from 'material-ui/Card';
// import Check from 'material-ui/svg-icons/navigation/check';
import Check_box_outline_blank from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import Check_box from 'material-ui/svg-icons/toggle/check-box'
// import Info_outline from 'material-ui/svg-icons/action/info-outline'

class SavedPlaces extends Component {
  state = {
    results: [],
    user:{}
  };

  componentDidMount() {
    console.log("component did mount", this.state.results)
    this.loadSavedPlaces();
  }

  loadSavedPlaces = () => {
    API.getSavedPlaces()
      .then(res =>
        this.setState({ results: res.data })
        // console.log("saved places", res.data)
      )
      .catch(err => console.log(err));
  };

  deletePlace = id => {
    API.deleteSavedPlace(id)
      .then(res => this.loadSavedPlaces())
      .catch(err => console.log(err));
  };

  checkBeenThere = id => {
    console.log("in checkbeenthere on saved places page")
    API.beenToPlace(id)
      .then(res => this.loadSavedPlaces())
      .catch(err => console.log(err));
  };

  unCheckBeenThere = id => {
    console.log("in uncheckbeenthere on saved places page")
    API.haveNotBeenToPlace(id)
      .then(res => this.loadSavedPlaces())
      .catch(err => console.log(err));
  };

  placeDetailPage = id => {
    console.log("clicked placedetail on saved places page")
    API.getSavedPlace(id)
      .then(res => this.getSavedPlace())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="saved-page-background">
        <Container>
          <Row>
            <Col size="sm-12">
              {/* <AppbarRow /> */}
            </Col>
          </Row>
        </Container>
        <div class="main-container">
        <Container>
          {this.state.results.length ? (
            <SavedList>
              {this.state.results.map(result => {
                return (
                  <Card>
                    
                    <SavedListItem key={result._id}>
                    <Row>
                    <Link to={{
                            pathname: '/savedplaces/' + result._id,
                            state: { placedetail: result }
                          }}>
                      <Col size="sm-10">
                      <div id="card-title-div">
                        <CardTitle title={result.brewery_name} subtitle={"Rating: " + result.rating} />
                        {/* <a href={result.website}>{result.brewery_name}</a> */}
                      </div>
                      </Col>
                      </Link>
                      <Col size="sm-2">
                      <div id="card-action-div" class="main-container">
                        <CardActions id="card-actions">
                          <Clear onClick={() => this.deletePlace(result._id)} />
                          {
                            (result.been_there) ?
                              <Check_box onClick={() => this.unCheckBeenThere(result._id)} /> : <Check_box_outline_blank onClick={() => this.checkBeenThere(result._id)} />
                          }
                          {/* <Link to={{
                            pathname: '/savedplaces/' + result._id,
                            state: { placedetail: result }
                          }}> */}
                            {/* <Info_outline
                            /> */}
                          
                          )}
                        </CardActions>
                      </div>
                      </Col>
                      </Row>
                    </SavedListItem>
                    {/* </Link> */}
                  </Card>
                );
              })}
            </SavedList>
          ) : (
              <h2 class="raleway-text">No Saved Breweries Yet</h2>
            )}
        </Container>
        </div>
      </div>
    );
  }
}

export default SavedPlaces;




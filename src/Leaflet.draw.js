/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: 'لغو ترسیم',
				text: 'لغو'
			},
			finish: {
				title: 'اتمام ترسیم',
				text: 'اتمام'
			},
			undo: {
				title: 'حذف آخرین نقطه',
				text: 'خذف آخرین نقطه'
			},
			buttons: {
				polyline: 'ترسیم خط',
				polygon: 'ترسیم چند ضلعی',
				rectangle: 'ترسیم مستطیل',
				circle: 'ترسیم دایره',
				marker: 'علامت گذاری',
				circlemarker: 'دایره علامت گذاری'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'کیلک و کشیدن برای رسم دایره.'
				},
				radius: 'شعاع'
			},
			circlemarker: {
				tooltip: {
					start: 'برای قرار دادن علامت روی نقشه کلیک کنید.'
				}
			},
			marker: {
				tooltip: {
					start: 'روی نقشه کلیک کنید.'
				}
			},
			polygon: {
				tooltip: {
					start: 'برای رسم چند ضلعی کلیک کنید.',
					cont: 'برای ادامه ترسیم کلیک کنید.',
					end: 'برای اتمام روی نقطه شروع کلیک کنید.'
				}
			},
			polyline: {
				error: '<strong>خطاء:</strong> لبه های شکل نمی توانند متقاطع شوند!',
				tooltip: {
					start: 'برای ترسیم خط کلیک کنید.',
					cont: 'برای ادامه ترسیم کلیک کنید.',
					end: 'برای اتمام روی نقطه شروع کلیک کنید.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'کیلک و کشیدن برای رسم دایره.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'برای اتمام موس را رها کنید.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'ذخیره تغییرات',
					text: 'ذخیره'
				},
				cancel: {
					title: 'لغو ویرایش، حذف همه تغییرات',
					text: 'لغو'
				},
				clearAll: {
					title: 'حذف تمام لایه ها',
					text: 'پاک سازی همه'
				}
			},
			buttons: {
				edit: 'ویرایش لایه ها',
				editDisabled: 'لایه ای برای ویرایش نیست',
				remove: 'حذف لایه ها',
				removeDisabled: 'لایه ای برای حذف نیست'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'برای ویرایش ویژگی‌ها، دستگیره‌ها یا نشانگرها را بکشید.',
					subtext: 'برای لغو تغییرات روی لغو کلیک کنید.'
				}
			},
			remove: {
				tooltip: {
					text: 'برای حذف روی یک ویژگی کلیک کنید.'
				}
			}
		}
	}
};

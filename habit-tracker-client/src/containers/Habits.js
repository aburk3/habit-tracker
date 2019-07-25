import React, { Component } from 'react';
import { connect } from 'react-redux';

import HabitCard from '../components/HabitCard';
import HabitForm from './HabitForm';
import { getHabits } from '../actions/habits';
import './Habits.css';
